import React from 'react'
import user from '../assets/user.png'
import contacts from '../assets/contacts.png'
import connection from '../assets/connection.png'
import settings from '../assets/settings.png'
import graph from '../assets/graph.png'
import qr from '../assets/qr.png'

export default function LeftNav() {
  return (
    <>
      <div className="flex flex-col items-center w-[100%] py-8 px-6 bg-white rounded-tr-3xl rounded-br-3xl">
        <h1 className="text-6xl text-center text-black font-normal justHand">BixID &nbsp;</h1>
        <div className='w-full'>
          <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer menuActive">
            <img className='mr-4 w-6' src={user} alt="" /> My Cards
          </p>
          <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
            <img className='mr-4 w-6' src={contacts} alt="" /> Contacts
          </p>
          <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
            <img className='mr-4 w-6' src={connection} alt="" /> Accessories
          </p>
          <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
            <img className='mr-4 w-6' src={graph} alt="" /> Insights
          </p>
          <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
            <img className='mr-4 w-6' src={settings} alt="" /> Settings
          </p>
        </div>
        <img className='py-12 pb-32' src={qr} alt="" />
        <button className='w-full mx-1 flex flex-row justify-center itemx-center px-4 py-3 rounded-xl bg-black text-white font-bold roboto'>
          Upgrade
        </button>
      </div>
    </>
  )
}
