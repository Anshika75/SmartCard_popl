import React from "react";

export default function AddIconModel({ choosedIcon , setAddItemModelOpen, setChoosedSocialMedia, choosedSocialMedia}) {
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
              <i class="fa-solid fa-magnifying-glass mx-4"></i>
              Search
            </div>
          </div>
        </div>
        <form className="flex flex-col w-full mt-12">
          <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-lg pb-4">
            {choosedIcon.name}
          </p>

          <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
            <input
              className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2"
              placeholder="Enter profile link"
            />
          </div>
          <div className="flex flex-row justify-between w-full mt-4">
            <button className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2" onClick={(e)=>{
              e.preventDefault();
              setAddItemModelOpen(null);
            }}>
              Cancel
            </button>
            <button className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2" onClick={
              (event)=>{
                event.preventDefault();
                setAddItemModelOpen(null);
                setChoosedSocialMedia([...choosedSocialMedia, choosedIcon]);
              }
            }>
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
