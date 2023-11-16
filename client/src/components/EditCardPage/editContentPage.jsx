"use client";
import React, { useEffect, useState } from "react";
import IconsAddModel from "./iconsAddModel";
import PreviewProfileCard from "./previewProfileCard";

export default function EditContentPage({ editcard, setEditCard }) {
  // All famous social media icons list from font awesome
  const socialMedia = {
    recommended: [
      {
        name: "Facebook",
        icon: "fab fa-facebook-f",
      },
      {
        name: "Instagram",
        icon: "fab fa-instagram",
      },
      {
        name: "Twitter",
        icon: "fab fa-twitter",
      },
      {
        name: "Linkedin",
        icon: "fab fa-linkedin-in",
      },
      {
        name: "Youtube",
        icon: "fab fa-youtube",
      },
      {
        name: "Tiktok",
        icon: "fab fa-tiktok",
      },
      {
        name: "Snapchat",
        icon: "fab fa-snapchat-ghost",
      },
      {
        name: "Reddit",
        icon: "fab fa-reddit-alien",
      },
      {
        name: "Pinterest",
        icon: "fab fa-pinterest-p",
      },
      {
        name: "Github",
        icon: "fab fa-github",
      },
      {
        name: "Whatsapp",
        icon: "fab fa-whatsapp",
      },
      {
        name: "Telegram",
        icon: "fab fa-telegram-plane",
      },
      {
        name: "Medium",
        icon: "fab fa-medium-m",
      },
      {
        name: "Patreon",
        icon: "fab fa-patreon",
      },
      {
        name: "Twitch",
        icon: "fab fa-twitch",
      },
      {
        name: "Spotify",
        icon: "fab fa-spotify",
      },
      {
        name: "Soundcloud",
        icon: "fab fa-soundcloud",
      },
      {
        name: "Apple",
        icon: "fab fa-apple",
      },
    ],
  };
  const [choosedSocialMedia, setChoosedSocialMedia] = useState(
    editcard.Socials
  );
  const [modelOpen, setModelOpen] = useState(false);
  useEffect(() => {
    setEditCard({
      ...editcard,
      Socials: choosedSocialMedia,
    });
  }, [choosedSocialMedia]);
  return (
    <div className="flex w-full min-w-fit">
      <div className="w-full lg:w-[75%] flex flex-col py-16 px-4 lg:px-4">
        <div className="w-full min-w-fit flex flex-col bg-[#F7F7F7] rounded-lg h-full items-center gap-5">
          {choosedSocialMedia.length > 0 ? (
            choosedSocialMedia.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center justify-between w-fit self-start text-3xl"
                  key={index}
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-[#F7F7F7] flex items-center justify-center mr-2">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <p className="text-[#202020] text-base roboto font-normal">
                      {item.name}
                    </p>
                    <p className="text-[#181156] text-base roboto font-normal">
                      {item.link}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center flex-col p-5 lg:p-16 w-full min-w-fit">
              <h3 className="text-[#202020] roboto text-center font-semibold text-xl lg:text-2xl">
                This profile doesn’t have any linked content
              </h3>
              <p className="text-[#202020] text-sm lg:text-base roboto font-normal text-center lg:px-16 mt-1">
                Add links to contact information, website, payment methods,
                social networks and more.
              </p>
            </div>
          )}
          <button
            className="bg-[#202020] text-white text-base roboto font-semibold py-2 rounded-full px-6 lg:px-12"
            onClick={() => {
              setModelOpen(true);
            }}
          >
            + &nbsp; &nbsp; Add links and Contect Info
          </button>

          {modelOpen && (
            <IconsAddModel
              socialMedia={socialMedia}
              setModelOpen={setModelOpen}
              setChoosedSocialMedia={setChoosedSocialMedia}
              choosedSocialMedia={choosedSocialMedia}
            />
          )}
        </div>

        <div className="flex w-full justify-end self-end lg:justify-end items-center mt-4 min-w-fit">
          <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full border-gray-300 border ">
            Cancel
          </button>
          <button
            className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full bg-black text-white"
            onClick={(e) => {
              e.preventDefault();
              fetch(
                `http://localhost:9000/user/edit-Card/${user._id}/${editcard._id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(editcard),
                }
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  // update card in local storage
                  const usr = JSON.parse(
                    StateMananger.localStorage.getItem("user")
                  );
                  const newCards = usr.Cards.map((card) => {
                    if (card._id == editcard._id) {
                      return editcard;
                    }
                    return card;
                  });
                  usr.Cards = newCards;
                  StateMananger.localStorage.setItem(
                    "user",
                    JSON.stringify(usr)
                  );
                });
            }}
          >
            Update
          </button>
        </div>
      </div>
      <div className="w-[25%] px-4 hidden lg:flex flex-col items-center border-l-2 border-l-[#F7F7F7] py-16">
        <p className="roboto text-[#828282]">Card Live Preview</p>
        <p className="roboto text-[#67ABFA] mb-4">
          View Card <i className="fa-solid fa-link"></i>
        </p>
        <PreviewProfileCard card={editcard} />
      </div>
    </div>
  );
}
