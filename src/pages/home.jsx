import React from 'react'
import ProfileCard from '../components/profileCard'
import PlusCard from '../components/plusCard'
import LeftNav from '../components/leftNav'
import RightNav from '../components/rightNav'
import smallPlus from '../assets/smallPlus.png'
import share from '../assets/share.png';
import chat from "../assets/chat.png"
export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-[#F1F1F1] w-full">
        <LeftNav />
        <div className="flex flex-col w-full py-8 px-6">
          <div className="flex w-full">
            <p className='flex text-black text-xl roboto font-bold w-full items-center'>My Cards <img className='w-4 h-4 ml-2' src={smallPlus} alt="" /></p>
            <button className='mx-1 flex flex-row justify-center itemx-center px-4 py-4 w-[160px] rounded-2xl bg-black text-white'>
              <img className='mr-2' src={share} alt="" />
              Share Card
            </button>
          </div>
          <div className="flex mt-16">
            <div className="flex">
              <ProfileCard />
              <PlusCard />
            </div>
            <RightNav />
          </div>
        </div>
        <div className='hidden md:block fixed bottom-3 right-3 scale-75'>
          <img src={chat} alt="" />
        </div>
      </div>
    </>
  )
}
