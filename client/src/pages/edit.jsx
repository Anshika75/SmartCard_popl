import React from 'react'
import LeftNav from '../components/leftNav'
import arrow from '../assets/arrow.png'
import line from '../assets/line.png'
import userprofile from '../assets/userprofile.png'
import dot from '../assets/dot.png'
import share from '../assets/share.png';
import user from '../assets/user.png'
import add from '../assets/add.png'
import bix from '../assets/bix.png'
import content from '../assets/content.png'
import email from '../assets/email.png'
import follow from '../assets/follow.png'
import lead from '../assets/lead.png'
import vb from '../assets/vb.png'
import Cover from '../assets/Cover.png'
import Profile from '../assets/Profile.png'
import pfp from '../assets/pfp.png'
import editW from '../assets/editW.png'
import info from '../assets/info.png'
import company from '../assets/company.png'
import cvr from '../assets/cvr.png'
import cvrPh from '../assets/cvrPh.png'
import companyPh from '../assets/companyPh.png'
import pfpPh from '../assets/pfpPh.png'
import toggle from '../assets/toggle.png'
import red from '../assets/red.png'
import green from '../assets/green.png'
import blue from '../assets/blue.png'
import yellow from '../assets/yellow.png'
import orange from '../assets/orange.png'
import pink from '../assets/pink.png'
import white from '../assets/white.png'
import color from '../assets/color.png'
export default function Edit() {
    return (
        <>
            <div className="relative flex min-h-screen bg-[#F1F1F1] w-full">
                <div className="hidden lg:flex lg:w-[20%] w-full">
                    <LeftNav />
                </div>
                <div className="w-full flex flex-col pt-12 px-4 lg:px-12">
                    <div className="w-full flex flex-row justify-between">
                        <div className="left flex items-center">
                            <img className='mx-2 h-[30px]' src={arrow} alt="" />
                            <img className='mx-2 h-[30px] hidden lg:block' src={line} alt="" />
                            <img className='mx-2 h-[30px] hidden lg:block' src={userprofile} alt="" />
                            <p className='hidden lg:block text-black text-lg roboto font-bold text-left'>Sanjeev</p>
                        </div>
                        <div className="right flex items-center">
                            <div className="relative bg-white flex items-center mx-2 px-1 rounded-full group min-w-[200px]">
                                <img src={userprofile} alt="" />
                                <p className='block text-black text-sm lg:text-lg ml-2 roboto font-bold text-left'>New Card</p>
                                <i className="fa-solid fa-chevron-down ml-10 lg:ml-24 pr-4"></i>
                                <div className="absolute lg:px-4 py-4 bg-white -bottom-[180%] lg:-bottom-[200%] -left-[10%] w-[90%] lg:w-[110%] hidden transition-all group-hover:grid place-items-center rounded-xl">
                                    <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 lg:px-12 py-3 rounded-full bg-black text-white'>
                                        <i class="fa-solid fa-plus mt-1 mr-3"></i>
                                        Create New Card
                                    </button>
                                </div>
                            </div>
                            <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-3 rounded-full bg-black text-white'>
                                <img className='lg:mr-2' src={share} alt="" />
                                <span className='hidden lg:block'>Share Card</span>
                            </button>
                            <div className="bg-white flex items-center mx-2 py-[20px] px-3 lg:px-0 lg:py-[10px] rounded-full">
                                <p className='hidden lg:block text-black text-xs lg:text-lg ml-2 roboto font-bold text-left opacity-0'>N</p>
                                <img src={dot} alt="" />
                                <p className='hidden lg:block text-black text-xs lg:text-lg ml-2 roboto font-bold text-left opacity-0'>N</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white flex min-h-screen overflow-hidden mt-12 rounded-xl">
                        <div className="h-full hidden lg:flex flex-col items-center w-[20%] py-8 px-4 bg-white border-r-2 border-r-[#F7F7F7]">
                            <div className='w-full'>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer menuActive">
                                    <img className='mr-4 w-6' src={user} alt="" /> About
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={content} alt="" /> Content
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={bix} alt="" /> BixCode
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={lead} alt="" /> Lead capture from
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={vb} alt="" /> Virtual Background
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={email} alt="" /> Email Signature
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={follow} alt="" /> Follow Up Email
                                </p>
                                <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
                                    <img className='mr-4 w-6' src={add} alt="" /> Add Accessories
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[55%] flex flex-col py-16 px-4 lg:px-4">
                            <div className="hidden lg:flex items-center">
                                <p className="roboto text-[#828282]">Card Title:</p>
                                <div className="bg-[#F7F7F7] roboto text-[#C9C9C9] flex p-1 ml-2 rounded-lg">Card Title <img src={editW} alt="" /></div>
                            </div>
                            <div className="hidden lg:flex mt-8">
                                <div className="flex flex-col items-center w-[30%]">
                                    <p className="roboto flex text-[#828282]">Profile Picture <img className='ml-1' src={info} alt="" /></p>
                                    <img className='w-[50%] mt-4' src={pfp} alt="" />
                                </div>
                                <div className="flex flex-col items-center w-[50%]">
                                    <p className="roboto flex text-[#828282]">Cover Photo <img className='ml-1' src={info} alt="" /></p>
                                    <img className='w-[80%] mt-4' src={cvr} alt="" />
                                </div>
                                <div className="flex flex-col items-center w-[30%]">
                                    <p className="roboto flex text-[#828282]">Profile Picture <img className='ml-1' src={info} alt="" /></p>
                                    <img className='w-[50%] mt-4' src={company} alt="" />
                                </div>
                            </div>
                            <div className="block lg:hidden">
                                <div className="relative">
                                    <img className='w-full' src={cvrPh} alt="" srcset="" />
                                    <img className='absolute bottom-0 left-[20%] translate-y-1/3 rounded-full w-[70px] h-[70px]' src={pfpPh} alt="" />
                                    <img className='absolute bottom-0 right-[20%] translate-y-1/3 rounded-full w-[70px] h-[70px]' src={companyPh} alt="" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                                <div className="flex flex-col w-full my-2 lg:mr-2">
                                    <p className="roboto text-[#828282]">Name:</p>
                                    <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
                                        <input className='roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg' type="text" placeholder='Name' />
                                        <p className='bg-white text-xs h-8 px-6 rounded-full border border-[#828282] text-[#828282] w-[160px] grid place-items-center'>+ Pronouns</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full my-2 lg:ml-2">
                                    <p className="roboto text-[#828282]">Location:</p>
                                    <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
                                        <input className='roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] flex py-4 rounded-lg' type="text" placeholder='Location' />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden mt-3 lg:grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div className="flex flex-col w-full my-2 lg:mr-2">
                                    <p className="roboto text-[#828282]">Job Title:</p>
                                    <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
                                        <input className='roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg' type="text" placeholder='Job Title' />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full my-2 lg:ml-2">
                                    <p className="roboto text-[#828282]">Company:</p>
                                    <div className="flex items-center bg-[#F7F7F7] px-3 w-full rounded-xl">
                                        <input className='roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] flex py-4 rounded-lg' type="text" placeholder='Company' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full my-2 lg:mr-2">
                                <p className="roboto text-[#828282]">Bio:</p>
                                <div className="flex items-start bg-[#F7F7F7] rounded-xl px-3 w-full h-[100px]">
                                    <input className='roboto bg-[#F7F7F7] outline-none font-medium text-[#202020] placeholder:text-[#C9C9C9] w-[70%] flex py-4 rounded-lg' type="text" placeholder='Bio' />
                                </div>
                            </div>
                            <div className="flex flex-col w-full my-2 lg:mr-2">
                                <p className="roboto text-[#828282]">Choose Theme:</p>
                                <div className="flex flex-col pt-4 bg-[#F7F7F7] rounded-xl px-3 lg:px-6 py-6 w-full min-h-[100px]">
                                    <div className="flex items-start justify-between">
                                        <img src={color} alt="" />
                                        <img src={white} alt="" />
                                        <img src={blue} alt="" />
                                        <img src={orange} alt="" />
                                        <img src={pink} alt="" />
                                        <img src={green} alt="" />
                                        <img src={yellow} alt="" />
                                        <img src={red} alt="" />
                                    </div>
                                    <div className="bg-white flex justify-between border pl-3 lg:pl-12 items-center py-3 pr-3 lg:pr-6 border-[#C9C9C9] rounded-xl mt-7">
                                        <div className="roboto text-[#828282]">Color Links Icons</div>
                                        <img src={toggle} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="flex w-full justify-center lg:justify-end items-center mt-4">

                                <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full border-gray-300 border '>
                                    Cancel
                                </button>
                                <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full bg-black text-white'>
                                    Update
                                </button>
                            </div>

                        </div>
                        <div className="w-[25%] px-4 hidden lg:flex flex-col items-center border-l-2 border-l-[#F7F7F7] py-16">
                            <p className="roboto text-[#828282]">Card Live Preview</p>
                            <p className="roboto text-[#67ABFA]">
                                View Card <i class="fa-solid fa-link"></i>
                            </p>
                            <div className="w-full flex flex-col pb-[200px] items-center border border-black rounded-xl min-h-[250px]">
                                <div className='relative'>
                                    <img src={Cover} className='w-full h-[120px]' alt="" />
                                    <img className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 rounded-full w-[70px] h-[70px]' src={Profile} alt="" />
                                </div>
                                <p className='block text-black  text-xl roboto font-normal text-center mt-10 '>Sanjeev</p>
                                <h1 className="text-base font-normal text-center text-[#C9C9C9] roboto"> UI/UX Designer</h1>

                                <button className='mx-1 mt-4 font-semibold text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-2 rounded-full bg-black text-white'>
                                    Save Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
