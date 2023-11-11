"use client";
import React, { useState } from 'react'
import IconsAddModel from './iconsAddModel';

export default function EditContentPage() {
    // All famous social media icons list from font awesome
    const socialMedia = {
        "recommended": [
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
            }
        ]
    };
    const [choosedSocialMedia, setChoosedSocialMedia] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);







  return (
    <div className="w-full flex flex-col justify-center items-center relative">
        {
            choosedSocialMedia.length > 0 ? choosedSocialMedia.map((item, index) => {
                return (
                    <div className="flex flex-row items-center justify-between w-fit">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#F7F7F7] flex items-center justify-center mr-2">
                            <i className={item.icon}></i>
                        </div>
                        <p className="text-[#202020] text-base roboto font-normal">{item.name}</p>
                    </div>
                )
            }): <div className="flex items-center flex-col">
                   <h3 className="text-[#202020] text-base roboto font-medium">Your profile don't have any social media links</h3>
                    {/* Add links to contact informations, websites, payment methods etc */}
                    <p className="text-[#202020] text-base roboto font-normal">
                        <span className="text-[#202020] text-base roboto font-normal">Add links to contact informations, websites, payment methods etc</span>
                    </p>
                </div>
        }
        <button className="bg-[#202020] text-white text-base roboto font-semibold py-2 rounded-md px-[20%]" onClick={()=>{
            setModelOpen(true)
        }}>Add Links</button>

        {modelOpen && <IconsAddModel socialMedia={socialMedia} setModelOpen={setModelOpen}/>}
    </div>
  )
}
