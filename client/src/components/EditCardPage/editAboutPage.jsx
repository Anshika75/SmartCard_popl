import pfp from "../../assets/pfp.png";
import editW from "../../assets/editW.png";
import info from "../../assets/info.png";
import company from "../../assets/company.png";
import cvr from "../../assets/cvr.png";
import cvrPh from "../../assets/cvrPh.png";
import companyPh from "../../assets/companyPh.png";
import pfpPh from "../../assets/pfpPh.png";
import toggle from "../../assets/toggle.png";

import React, {useEffect, useState} from "react";

function EditAboutPage({ editcard, setEditCard}) {
  const [profilePicture, setProfilePicture] = useState(editcard.ProfileImage);
  const [coverPhoto, setCoverPhoto] = useState(editcard.CoverImage);
  const [companyLogo, setCompanyLogo] = useState(editcard.CompanyLogo);

  useEffect(() => {
    setEditCard({
      ...editcard,
      ProfileImage: profilePicture,
      CoverImage: coverPhoto,
      CompanyLogo: companyLogo,
    });
  }
  , [profilePicture, coverPhoto, companyLogo]);
  
  return (
    <div className="w-full flex flex-col">
      <div className="hidden lg:flex items-center">
        <p className="roboto text-[#828282]">Card Title:</p>
        <div className="bg-[#F7F7F7] roboto text-[#C9C9C9] flex p-1 ml-2 rounded-lg">
          Card Title <img src={editW} alt="" />
        </div>
      </div>
      <div className="hidden lg:flex mt-8">

        <input id="profilePicture" type="file" className="hidden"  onChange={(e)=>{
          setProfilePicture((e.target.files[0]));
        }}/>
        <label htmlFor="profilePicture" className="flex flex-col items-center w-[30%]">
          <p className="roboto flex text-[#828282]">
            Profile Picture <img className="ml-1" src={info} alt="" />
          </p>
          <img className="w-[50%] mt-4 rounded-full object-cover aspect-square" src={typeof profilePicture == "string"? profilePicture:URL.createObjectURL(profilePicture)} alt="" />
        </label>

        <input id="coverPhoto" type="file" className="hidden" onChange={(e)=>{
          setCoverPhoto((e.target.files[0]));
        }}/>
        <label htmlFor="coverPhoto" className="flex flex-col items-center w-[30%]">
          <p className="roboto flex text-[#828282]">
            Cover Photo <img className="ml-1" src={info} alt="" />
          </p>
          <img className="w-[50%] mt-4 rounded-full object-cover aspect-square" src={typeof coverPhoto == "string"? coverPhoto:URL.createObjectURL(coverPhoto)} alt="" />
        </label>

        <input id="companyLogo" type="file" className="hidden" onChange={
          (e)=>{
            setCompanyLogo((e.target.files[0]));
          }
        } />
        <label htmlFor="companyLogo" className="flex flex-col items-center w-[30%]">
          <p className="roboto flex text-[#828282]">
            Company Logo <img className="ml-1" src={info} alt="" />
          </p>
          <img className="w-[50%] mt-4 rounded-full object-cover aspect-square" src={companyLogo&&(typeof companyLogo == "string"? companyLogo:URL.createObjectURL(companyLogo))} alt="" />
        </label>


      </div>
      <div className="block lg:hidden">
        <div className="relative">
          <img className="w-full" src={cvrPh} alt="" />
          <img
            className="absolute bottom-0 left-[20%] translate-y-1/3 rounded-full w-[70px] h-[70px]"
            src={pfpPh}
            alt=""
          />
          <img
            className="absolute bottom-0 right-[20%] translate-y-1/3 rounded-full w-[70px] h-[70px]"
            src={companyPh}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
        <div className="flex flex-col w-full my-2 lg:mr-2">
          <p className="roboto text-[#828282]">Name:</p>
          <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
            <input
              className="roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg"
              type="text"
              placeholder="Name"
              value={editcard.FirstName}
              onInput={(e) => {
                setEditCard({
                  ...editcard,
                  FirstName: e.target.value,
                });
              }}
            />
            <p className="bg-white text-xs h-8 px-6 rounded-full border border-[#828282] text-[#828282] w-[160px] grid place-items-center">
              + Pronouns
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full my-2 lg:ml-2">
          <p className="roboto text-[#828282]">Location:</p>
          <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
            <input
              className="roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] flex py-4 rounded-lg"
              type="text"
              placeholder="Location"
              value={editcard.Location.Address}
              onInput={(e) => {
                setEditCard({
                  ...editcard,
                  Location: {
                    ...editcard.Location,
                    Address: e.target.value,
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="hidden mt-3 lg:grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col w-full my-2 lg:mr-2">
          <p className="roboto text-[#828282]">Position:</p>
          <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
            <input
              className="roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg"
              type="text"
              placeholder="Job Title"
              value={editcard.Position}
              onInput={(e) => {
                setEditCard({
                  ...editcard,
                  Position: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-2 lg:ml-2">
          <p className="roboto text-[#828282]">Business Name:</p>
          <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
            <input
              className="roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] flex py-4 rounded-lg"
              type="text"
              placeholder="Business Name"
              value={editcard.BusinessName}
              onInput={(e) => {
                setEditCard({
                  ...editcard,
                  BusinessName: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full my-2 lg:mr-2">
        <p className="roboto text-[#828282]">About:</p>
        <div className="flex items-start bg-[#F7F7F7] rounded-xl px-3 w-full h-[100px]">
          <input
            className="roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg"
            type="text"
            placeholder="Bio"
            value={editcard.About.AboutText}
            onInput={(e) => {
              setEditCard({
                ...editcard,
                About: {
                  ...editcard.About,
                  AboutText: e.target.value,
                },
              });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full my-2 lg:mr-2">
        <p className="roboto text-[#828282]">Choose Theme:</p>
        <div className="flex flex-col pt-4 bg-[#F7F7F7] rounded-xl px-3 lg:px-6 py-6 w-full min-h-[100px]">
          <div className="flex items-start justify-between">
            {/* Input type color with label as colorPickericon */}
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full">
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={editcard.colorTheme}
                onChange={(e) => {
                  setEditCard({
                    ...editcard,
                    colorTheme: e.target.value,
                  });
                }}
              />
            </div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#FF0000]"
              onClick={(e) => {
                setEditCard({ ...editcard, colorTheme: "#FF0000" });
              }}
            ></div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#00FFAB]"
              onClick={(e) => {
                setEditCard({ ...editcard, colorTheme: "#00FFAB" });
              }}
            ></div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#29BDC1]"
              onClick={(e) => {
                setEditCard({ ...editcard, colorTheme: "#29BDC1" });
              }}
            ></div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#D84242]"
              onClick={(e) => {
                setEditCard({ ...editcard, colorTheme: "#D84242" });
              }}
            ></div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#913F92]"
              onClick={(e) => {
                setEditCard({ ...editcard, colorTheme: "#913F92" });
              }}
            ></div>
          </div>
          <div className="bg-white flex justify-between border pl-3 lg:pl-12 items-center py-3 pr-3 lg:pr-6 border-[#C9C9C9] rounded-xl mt-7">
            <div className="roboto text-[#828282]">Color Links Icons</div>
            <img src={toggle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAboutPage;
