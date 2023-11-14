import React from "react";

function PreviewProfileCard({card}) {
  return (
    <div
      className={
        "w-full flex flex-col pb-[200px] items-center border border-black rounded-xl min-h-[250px] bg-[" +
        `${card.colorTheme}` +
        "]"
      }
    >
      <div className="relative">
        <img src={card.CoverImage&&(typeof card.CoverImage == "string"? card.CoverImage:URL.createObjectURL(card.CoverImage))} className="w-full h-[120px]" alt="" />
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 rounded-full w-[70px] h-[70px]"
          src={card.ProfileImage&&(typeof card.ProfileImage == "string"? card.ProfileImage:URL.createObjectURL(card.ProfileImage))}
          alt=""
        />
      </div>
      <p className="block text-black  text-xl roboto font-normal text-center mt-10 ">
        {card.FirstName}
      </p>
      <h1 className="text-base font-normal text-center text-[#C9C9C9] roboto">
        {card.Position}
      </h1>
      <h1 className="text-base font-normal text-center text-[#C9C9C9] roboto">
        {card.Company}
        </h1>

      <button className="mx-1 mt-4 font-semibold text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-2 rounded-full bg-black text-white">
        Save Contact
      </button>
    </div>
  );
}

export default PreviewProfileCard;
