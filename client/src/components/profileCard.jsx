import React, { useEffect, useState } from 'react'
import edit from '../assets/edit.png';
import share from '../assets/share.png';
export default function ProfileCard({CoverImage,ProfileImage,FirstName,LastName,AboutText,_id}) {
    

    return (
        <>
            <div className="w-[300px] lg:w-[450px] h-[290px] lg:h-[340px] bg-white rounded-lg flex flex-col items-center p-4 mx-3 my-3">
                <div className='relative'>
                    <img src={CoverImage} className='w-full h-[100px] lg:h-[140px]' alt="" />
                    <img className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 rounded-full w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]' src={ProfileImage} alt="" />
                </div>
                <p className='block text-black  text-xl roboto font-bold text-center mt-10 lg:mt-16'>{FirstName} {LastName}</p>
                <h1 className="text-xl font-normal text-center text-[#C9C9C9] roboto">{AboutText}</h1>
                <div className="flex mt-3 lg:mt-2">
                    <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-2 rounded-full border-gray-300 border ' onClick={()=>{
                        window.location.href='/editCard?id='+_id;
                        console.log(_id);
                    }}>
                        <img className='mr-2 mt-1' src={edit} alt="" />
                        Edit Card
                    </button>
                    <button className='mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-4 py-2 rounded-full bg-black text-white' onClick={()=>{navigator.share("Share My Profile")}}>
                        <img className='mr-2' src={share} alt="" />
                        Share Card
                    </button>
                </div>
            </div>
        </>
    )
}
