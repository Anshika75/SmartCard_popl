import React from "react";

function EditLeftNav({nav,selectedNav, setSelectedNav}) {

  return (
    <div className="h-full hidden lg:flex flex-col items-center w-[20%] py-8 px-4 bg-white border-r-2 border-r-[#F7F7F7]">
      <div className="w-full">
        {Object.keys(nav).map((key,i) => (
          <p onClick={()=>{
            setSelectedNav(key)
          }} key={key} className={"flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer "+`${key==selectedNav?"menuActive":""}`}>
            <img className="mr-4 w-6" src={nav[key].icon} alt="" /> {nav[key].text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default EditLeftNav;
