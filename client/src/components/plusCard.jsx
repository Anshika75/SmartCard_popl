import React from 'react'
import Plus from '../assets/Plus.png'
export default function PlusCard() {
    return (
        <>
            <div className="w-[300px] cursor-pointer lg:w-[400px] h-[250px] lg:h-[340px] bg-white rounded-lg flex flex-col items-center justify-center p-4 mx-3 my-12">
                <img src={Plus} alt="" />
                <p className='block text-black text-2xl roboto font-bold text-center mt-2'>Create New Card</p>                
            </div>
        </>
    )
}
