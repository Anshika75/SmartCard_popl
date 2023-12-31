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
import EditContentPage from "../components/EditCardPage/editContentPage";
import EditBixCodePage from "../components/EditCardPage/editBixCodePage";
// import AWS from "aws-sdk";
export default function EditCard() {
  const [selectedNav, setSelectedNav] = useState("about");

  //   const [currentEditPage, setCurrentEditPage] = useState(nav["about"].page);
  //   useEffect(() => {
  //     setCurrentEditPage(nav[selectedNav].page);
  //   }, [selectedNav])
  const [editcard, setEditCard] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const usr = JSON.parse(StateMananger.localStorage.getItem("user"));
    setUser(usr);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    usr?.Cards?.map((card) => {
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
  useEffect(() => {
    return;
    // Check is profile image is a string or a file , if it is file then upload it to aws s3 and get the url and set it to profile image
    if (
      editcard &&
      editcard.ProfileImage &&
      typeof editcard.ProfileImage != "string"
    ) {
      const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: "ProfileImages/" + editcard.ProfileImage.name,
        Body: editcard.ProfileImage,
        ACL: "public-read",
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        setEditCard({
          ...editcard,
          ProfileImage: data.Location,
        });
      });
    }

    // Check is cover image is a string or a file , if it is file then upload it to aws s3 and get the url and set it to cover image
    if (
      editcard &&
      editcard.CoverImage &&
      typeof editcard.CoverImage != "string"
    ) {
      const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: "CoverImages/" + editcard.CoverImage.name,
        Body: editcard.CoverImage,
        ACL: "public-read",
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        setEditCard({
          ...editcard,
          CoverImage: data.Location,
        });
      });
    }

    // Check is company logo is a string or a file , if it is file then upload it to aws s3 and get the url and set it to company logo
    if (
      editcard &&
      editcard.CompanyLogo &&
      typeof editcard.CompanyLogo != "string"
    ) {
      const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: "CompanyLogos/" + editcard.CompanyLogo.name,
        Body: editcard.CompanyLogo,
        ACL: "public-read",
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        setEditCard({
          ...editcard,
          CompanyLogo: data.Location,
        });
      });
    }
  }, [editcard]);
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
      page: <EditContentPage editcard={editcard} setEditCard={setEditCard} />,
    },
    bixcode: {
      text: "BixCode",
      icon: bix,
      page: <EditBixCodePage editcard={editcard} setEditCard={setEditCard} />,
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
            {nav[selectedNav].page}
          </div>
        </div>
      </div>
    </>
  );
}
