import React, { useState } from "react";
import message from "../../assets/message.png";
import mail from "../../assets/mail.png";
import instagram from "../../assets/instagram.png";
import AddIconModel from "./iconsAddIconModel";


export default function IconsAddModel({
  socialMedia,
  setModelOpen,
  setChoosedSocialMedia,
  choosedSocialMedia
}) {
  const [addItemModelOpen, setAddItemModelOpen] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center absolute top-0 left-0 h-screen w-full bg-[#d9d9d96a]">
      <div className="card flex flex-col items-start justify-start w-[90%] lg:w-[50%] lg:max-w-[1000px] h-[90%] bg-white rounded-lg shadow-md p-6 overflow-visible">
        <div className="flex flex-col w-full">
          <h3 className="text-[#202020] roboto font-semibold text-2xl">
            Add content
          </h3>
          <div className="text-[#202020] text-base roboto font-normal text-center mt-1 flex flex-col lg:flex-row w-full lg:items-center lg:justify-between">
            <p className="w-full text-left">
              Select from our wide variety of link and contact info below.
            </p>
            <div className="bg-[#F7F7F7] p-1 rounded-full w-full mt-4 lg:mt-0 lg:w-[50%] text-[#C9C9C9] roboto text-left">
              <i className="fa-solid fa-magnifying-glass mx-4"></i>
              Search
            </div>
          </div>
        </div>
        {
          addItemModelOpen && <AddIconModel choosedIcon={addItemModelOpen} setAddItemModelOpen={setAddItemModelOpen} setChoosedSocialMedia={setChoosedSocialMedia} choosedSocialMedia={choosedSocialMedia} />
        }
        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-lg mt-12 pb-4">
          Recommended
        </p>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-wrap ">
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Message",
                socialHandle: "",
                logo: "./assets/message.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={message} alt="" />
            <span className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <p className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </p>
            </span>
          </div>
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Mail",
                socialHandle: "",
                logo: "./assets/mail.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={mail} alt="" />
            <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <span className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </span>
            </p>
          </div>
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Instagram",
                socialHandle: "",
                logo: "./assets/instagram.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={instagram} alt="" />
            <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <span className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </span>
            </p>
          </div>
        </div>
        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-lg mt-12 pb-4">
          Contact
        </p>
        {/* <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-wrap ">
          {socialMedia.recommended.map((item, index) => {
            return (
              <div key={index}  className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={()=>{
                setAddItemModelOpen(item);
              }}>
                <i className={"w-[30px] lg:w-[60px] text-3xl "+ item.icon} src={instagram} alt="" />
                <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
                    {item.name}
                  <span className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                    +
                  </span>
                </p>
              </div>
            );
          })}
        </div> */}

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-wrap ">
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Message",
                socialHandle: "",
                logo: "./assets/message.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={message} alt="" />
            <span className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <p className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </p>
            </span>
          </div>
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Mail",
                socialHandle: "",
                logo: "./assets/mail.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={mail} alt="" />
            <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <span className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </span>
            </p>
          </div>
          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl" onClick={
            () => {
              setAddItemModelOpen({
                name: "Instagram",
                socialHandle: "",
                logo: "./assets/instagram.png"
              });
            }
          }>
            <img className="w-[30px] lg:w-[60px]" src={instagram} alt="" />
            <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">
              Text
              <span className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer">
                +
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mt-4">
          <button className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2" onClick={() => {
            setModelOpen(false);
          }}> Close </button>
        </div>
      </div>
    </div>
  );
}
