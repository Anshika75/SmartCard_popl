import React from 'react'
import next from '../assets/next.png'
import done from '../assets/done.png'
export default function RightNav() {
    return (
        <>
            <div className="w-[250px] flex flex-col items-start  py-8 px-3 bg-white rounded-3xl m-20 pb-16">
                <p className='block text-black text-2xl roboto font-medium mt-8'>Get Started With BixID</p>
                <p className='block text-black text-xl roboto font-normal mt-3 leading-[2rem]'>Complete this steps to make your BixID</p>

                <div className="w-[75%] h-[5px] rounded-xl bg-[#E0E0E0] mt-4">
                    <div className="w-[35%] h-[5px] rounded-xl bg-[#67ABFA]"></div>
                </div>
                <p className="text-base font-normal text-center text-[#C9C9C9] roboto">35% Complete</p>
                <p className="text-lg font-bold text-center text-[#C9C9C9] roboto mt-8">Completed</p>
                <p className="text-lg font-medium text-center text-[#C9C9C9] roboto mt-2 flex">1. <del>Create Your Account</del> <img className='ml-4' src={done} alt="" /></p>
                <div className="flex flex-col mt-6 border-[#E0E0E0] border rounded-xl p-2">
                    <div className="w-8 h-8 rounded-full grid place-items-center text-lg bg-[#00ADEF] text-white roboto">2</div>
                    <p className='flex text-black text-lg roboto font-medium mt-2'>Sign in into mobile app <img className='ml-1 w-4' src={next} alt="" /></p>
                    <p className='block text-black text-lg roboto font-normal mt-3 leading-[1.75rem]'>Lorem ipsum dolor sit amet consectetur. Id. Lorem ipsum dolor sit amet consectetur. Id.</p>
                </div>
                <div className="flex flex-col mt-6 border-[#E0E0E0] border rounded-xl p-2">
                    <div className="w-8 h-8 rounded-full grid place-items-center text-lg bg-[#00ADEF] text-white roboto">3</div>
                    <p className='flex text-black text-lg roboto font-medium mt-2'>Sign in into mobile app <img className='ml-1 w-4' src={next} alt="" /></p>
                    <p className='block text-black text-lg roboto font-normal mt-3 leading-[1.75rem]'>Lorem ipsum dolor sit amet consectetur. Id. Lorem ipsum dolor sit amet consectetur. Id.</p>
                </div>

            </div>
        </>
    )
}
