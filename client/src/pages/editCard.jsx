import React, { useEffect } from "react";
import LeftNav from "../components/leftNav";
import arrow from "../assets/arrow.png";

import line from "../assets/Line.png";
import userprofile from "../assets/userprofile.png";
import dot from "../assets/dot.png";
import share from "../assets/share.png";
import EditLeftNav from "../components/EditCardPage/editLeftNav";
import user from "../assets/user.png";
import add from "../assets/add.png";
import bix from "../assets/bix.png";
import content from "../assets/content.png";
import email from "../assets/email.png";
import follow from "../assets/follow.png";
import lead from "../assets/lead.png";
import vb from "../assets/vb.png";

import { useState } from "react";
import PreviewProfileCard from "../components/EditCardPage/previewProfileCard";

import EditAboutPage from "../components/EditCardPage/editAboutPage";
export default function EditCard() {
  const [selectedNav, setSelectedNav] = useState("about");

  //   const [currentEditPage, setCurrentEditPage] = useState(nav["about"].page);
  //   useEffect(() => {
  //     setCurrentEditPage(nav[selectedNav].page);
  //   }, [selectedNav])
  const [editcard, setEditCard] = useState(false);
  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    const user = {"_id":"654e5e02abebd4a60445cd31","displayName":"Rahul","displayProfile":"https://smart-card-bixcube.s3.amazonaws.com/Dheeraj_profile_image.jpg","Authentication":{"Username":"Rohit","Password":"Ranaa","_id":"654e5e02abebd4a60445cd32"},"__v":0,"Cards":[{"CardID":"123456","FirstName":"John","LastName":"Doe","ProfileImage":"https://example.com/profile.jpg","CoverImage":"https://example.com/cover.jpg","Contact":"123-456-7890","DOB":"1990-01-01","BusinessName":"Sample Business","Position":"Manager","Designation":"Executive","Website":"https://example.com","Socials":{"items":[{"id":"1","name":"Instagram","socialHandle":"@sample_instagram","logo":"https://example.com/instagram-logo.jpg","description":"Sample Instagram Profile","_id":"654e5ed36fb5b4e1b4c5780c"},{"id":"2","name":"LinkedIn","socialHandle":"/in/sample_linkedin","logo":"https://example.com/linkedin-logo.jpg","description":"Sample LinkedIn Profile","_id":"654e5ed36fb5b4e1b4c5780d"}],"_id":"654e5ed36fb5b4e1b4c5780b"},"About":{"GSTIN":"123456789012","PANNumber":"ABCDE1234F","AboutText":"About the sample user","_id":"654e5ed36fb5b4e1b4c5780e"},"Location":{"Address":"123 Main St","ZipCode":"12345","Latitude":40.7128,"Longitude":-74.006,"_id":"654e5ed36fb5b4e1b4c5780f"},"Gallery":{"IMG1":"https://example.com/img1.jpg","IMG2":"https://example.com/img2.jpg","IMG3":"https://example.com/img3.jpg","IMG4":"https://example.com/img4.jpg","IMG5":"https://example.com/img5.jpg","_id":"654e5ed36fb5b4e1b4c57810"},"Payment":{"PayPal":"sample_paypal@example.com","BankName":"Sample Bank","AccountHolderName":"John Doe","AccountNumber":"1234567890","IFSC":"ABCD1234","GooglePay":"sample_googlepay@example.com","PhonePe":"sample_phonepe@example.com","Paytm":"sample_paytm@example.com","UPI":"sample_upi@example.com","_id":"654e5ed36fb5b4e1b4c57811"},"_id":"654e5ed36fb5b4e1b4c5780a"},{"CardID":"123456","FirstName":"Dheeraj","LastName":"Joshi","ProfileImage":"https://smart-card-bixcube.s3.amazonaws.com/Dheeraj_profile_image.jpg","CoverImage":"https://bixid.s3.amazonaws.com/Dheeraj_cover_image.jpg","Contact":"123-456-7890","DOB":"1990-01-01","BusinessName":"Sample Business","Position":"Manager","Designation":"Executive","Website":"https://example.com","Socials":{"items":[{"id":"1","name":"Instagram","socialHandle":"@sample_instagram","logo":"https://example.com/instagram-logo.jpg","description":"Sample Instagram Profile","_id":"654e5ed36fb5b4e1b4c57814"},{"id":"2","name":"LinkedIn","socialHandle":"/in/sample_linkedin","logo":"https://example.com/linkedin-logo.jpg","description":"Sample LinkedIn Profile","_id":"654e5ed36fb5b4e1b4c57815"}],"_id":"654e5ed36fb5b4e1b4c57813"},"About":{"GSTIN":"123456789012","PANNumber":"ABCDE1234F","AboutText":"About the sample user","_id":"654e5ed36fb5b4e1b4c57816"},"Location":{"Address":"123 Main St","ZipCode":"12345","Latitude":40.7128,"Longitude":-74.006,"_id":"654e5ed36fb5b4e1b4c57817"},"Gallery":{"IMG1":"https://example.com/img1.jpg","IMG2":"https://example.com/img2.jpg","IMG3":"https://example.com/img3.jpg","IMG4":"https://example.com/img4.jpg","IMG5":"https://example.com/img5.jpg","_id":"654e5ed36fb5b4e1b4c57818"},"Payment":{"PayPal":"sample_paypal@example.com","BankName":"Sample Bank","AccountHolderName":"John Doe","AccountNumber":"1234567890","IFSC":"ABCD1234","GooglePay":"sample_googlepay@example.com","PhonePe":"sample_phonepe@example.com","Paytm":"sample_paytm@example.com","UPI":"sample_upi@example.com","_id":"654e5ed36fb5b4e1b4c57819"},"_id":"654e5ed36fb5b4e1b4c57812"}]}

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    user?.Cards?.map((card) => {
      if (card._id == id) {
        setEditCard({
          name: card.FirstName + " " + card.LastName,
          location: card?.Location?.Address,
          jobTitle: card.Position,
          BusinessName: card.BusinessName,
          bio: card.AboutText,
          colorTheme: card.colorTheme || "#0000FF",
          ProfileImage: card.ProfileImage,
          CoverImage: card.CoverImage,
        });
        setEditCard(card);
      }
    });
  }, []);
  if (!editcard) return <h1> Not Logged In </h1>;
  console.log(editcard);
  const nav = {
    about: {
      text: "About",
      icon: user,
      page: <EditAboutPage editcard={editcard} setEditCard={setEditCard} />,
    },
    content: {
      text: "Content",
      icon: content,
    },
    bixcode: {
      text: "BixCode",
      icon: bix,
    },
    lead: {
      text: "Lead capture from",
      icon: lead,
    },
    vb: {
      text: "Virtual Background",
      icon: vb,
    },
    email: {
      text: "Email Signature",
      icon: email,
    },
    follow: {
      text: "Follow Up Email",
      icon: follow,
    },
    add: {
      text: "Add Accessories",
      icon: add,
    },
  };
  return (
    <>
      <div className="relative flex min-h-screen bg-[#F1F1F1] w-full">
        <div className="hidden lg:flex lg:w-[20%] w-full">
          <LeftNav />
        </div>
        <div className="w-full flex flex-col pt-12 px-4 lg:px-12">
          <div className="w-full flex flex-row justify-between">
            <div className="left flex items-center">
              <img className="mx-2 h-[30px]" src={arrow} alt="" />
              <img
                className="mx-2 h-[30px] hidden lg:block"
                src={line}
                alt=""
              />
              <img
                className="mx-2 h-[30px] hidden lg:block"
                src={userprofile}
                alt=""
              />
              <p className="hidden lg:block text-black text-lg roboto font-bold text-left">
                Sanjeev
              </p>
            </div>
            <div className="right flex items-center">
              <div className="relative bg-white flex items-center mx-2 px-1 rounded-full group min-w-[200px]">
                <img src={userprofile} alt="" />
                <p className="block text-black text-sm lg:text-lg ml-2 roboto font-bold text-left">
                  New Card
                </p>
                <i className="fa-solid fa-chevron-down ml-10 lg:ml-24 pr-4"></i>
                <div className="absolute lg:px-4 py-4 bg-white -bottom-[180%] lg:-bottom-[200%] -left-[10%] w-[90%] lg:w-[110%] hidden transition-all group-hover:grid place-items-center rounded-xl">
                  <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 lg:px-12 py-3 rounded-full bg-black text-white">
                    <i className="fa-solid fa-plus mt-1 mr-3"></i>
                    Create New Card
                  </button>
                </div>
              </div>
              <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-3 rounded-full bg-black text-white">
                <img className="lg:mr-2" src={share} alt="" />
                <span className="hidden lg:block">Share Card</span>
              </button>
              <div className="bg-white flex items-center mx-2 py-[20px] px-3 lg:px-0 lg:py-[10px] rounded-full">
                <p className="hidden lg:block text-black text-xs lg:text-lg ml-2 roboto font-bold text-left opacity-0">
                  N
                </p>
                <img src={dot} alt="" />
                <p className="hidden lg:block text-black text-xs lg:text-lg ml-2 roboto font-bold text-left opacity-0">
                  N
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-white flex min-h-screen overflow-hidden mt-12 rounded-xl">
            <EditLeftNav
              nav={nav}
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
            <div className="w-full lg:w-[55%] flex flex-col py-16 px-4 lg:px-4">
              {nav[selectedNav].page}
              <div className="flex w-full justify-end self-end lg:justify-end items-center mt-4">
                <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full border-gray-300 border ">
                  Cancel
                </button>
                <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full bg-black text-white">
                  Update
                </button>
              </div>
            </div>
            <div className="w-[25%] px-4 hidden lg:flex flex-col items-center border-l-2 border-l-[#F7F7F7] py-16">
              <p className="roboto text-[#828282]">Card Live Preview</p>
              <p className="roboto text-[#67ABFA]">
                View Card <i className="fa-solid fa-link"></i>
              </p>
              <PreviewProfileCard card={editcard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
