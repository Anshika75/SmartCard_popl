import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/profileCard'
import PlusCard from '../components/plusCard'
import LeftNav from '../components/leftNav'
import RightNav from '../components/rightNav'
import smallPlus from '../assets/smallPlus.png'
import share from '../assets/share.png';
import chat from "../assets/chat.png"
import menu from "../assets/menu.png"
import diamond from "../assets/diamond.png"

export default function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(Wind.StateMananger.localStorage.getItem("user"));
    setUser(user);
  }, []);
  if (user == null) {
    window.location.href = "/login";
  }

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-[#F1F1F1] w-full">
        <div className="flex flex-row lg:hidden w-full justify-between items-center py-4 px-6">
          <img className='h-[30px]' src={menu} alt="" />
          <h1 className="text-5xl text-center text-black font-normal justHand">BixID &nbsp;</h1>
          <img className='h-[30px]' src={diamond} alt="" />
        </div>
        <div className="flex min-h-screen w-full">
          <div className="hidden lg:flex w-[20%]">
            <LeftNav />
          </div>
          <div className="flex flex-col w-full py-8 px-6">
            <div className="hidden lg:flex w-full">
              <p className='flex text-black text-xl roboto font-bold w-full items-center'>My Cards <img className='w-4 h-4 ml-2' src={smallPlus} alt="" /></p>
              <button className='mx-1 flex flex-row justify-center itemx-center px-4 py-4 w-[160px] rounded-2xl bg-black text-white'>
                <img className='mr-2' src={share} alt="" />
                Share Card
              </button>
            </div>
            <div className="flex mt-1 lg:mt-16">
              <div className="grid w-[80%] grid-cols-1 place-items-center lg:grid-cols-2">
                {
                  user?.Cards?.map((card,i) => <ProfileCard {...card} key={i} />
                  )
                }
                <PlusCard />
              </div>
              <div className="hidden lg:flex">
                <RightNav />
              </div>
            </div>
          </div>
          <div className='block fixed -bottom-2 -right-2 lg:bottom-3 lg:right-3 scale-75'>
            <img src={chat} alt="" />
          </div>
        </div>
        {/* <Cardfor/> */}
      </div>
    </>
  )
}
