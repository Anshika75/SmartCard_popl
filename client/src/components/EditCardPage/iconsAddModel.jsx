import React from 'react'
import message from "../../assets/message.png"
import mail from "../../assets/mail.png"
import instagram from "../../assets/instagram.png"

export default function IconsAddModel({ socialMedia, setModelOpen }) {
    return (
        <div className="flex flex-col items-center justify-center absolute top-0 left-0 h-screen w-full bg-[#d9d9d96a]">
            <div className="card flex flex-col items-start justify-start w-[90%] lg:w-[50%] lg:max-w-[1000px] h-[90%] bg-white rounded-lg shadow-md p-6 overflow-visible">
                <div className="flex flex-col w-full">
                    <h3 className="text-[#202020] roboto font-semibold text-2xl">Add content</h3>
                    <div className="text-[#202020] text-base roboto font-normal text-center mt-1 flex flex-col lg:flex-row w-full lg:items-center lg:justify-between">
                        <p className='w-full text-left'>Select from our wide variety of link and contact info below.</p>
                        <div className="bg-[#F7F7F7] p-1 rounded-full w-full mt-4 lg:mt-0 lg:w-[50%] text-[#C9C9C9] roboto text-left">
                            <i class="fa-solid fa-magnifying-glass mx-4"></i>
                            Search
                        </div>

                    </div>
                </div>
                <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-lg mt-12 pb-4">Recommended</p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-wrap ">
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={message} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={mail} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={instagram} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                </div>
                <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-lg mt-12 pb-4">Contact</p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-wrap ">
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={message} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={mail} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={instagram} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={message} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={mail} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div>
                    <div className="w-full py-3 px-2 flex items-center bg-[#F7F7F7] rounded-xl">
                        <img className="w-[30px] lg:w-[60px]" src={instagram} alt="" />
                        <p className="text-[#202020] flex justify-between w-full roboto font-semibold text-sm items-center lg:text-lg ml-2">Text
                            <p className='w-[30px] h-[30px] rounded-full bg-white grid place-items-center text-[#C7C7C7] cursor-pointer'>+</p></p>
                    </div> 
                </div>
            </div>
        </div>


    )
}
