import React from 'react'
import singleuser from "../assets/singleuser.png"
import team from "../assets/team.png"
export default function Cardfor() {
    return (
        <>
            <div className="absolute top-0 left-0 bg-[#d9d9d984] w-full h-full grid place-items-center">
                <div className="lg:w-[450px] bg-white rounded-lg p-8">
                    <p className='block text-black text-xl roboto font-bold text-left'>Who's this card for?</p>
                    <div className="flex flex-col lg:flex-row mt-4">
                        <div className="w-[200px] h-[150px] lg:mr-2 my-3 flex flex-col items-center justify-center border border-[#C9C9C9] rounded-lg">
                            <img src={singleuser} alt="" srcset="" />
                            <p className='block text-black text-lg roboto font-bold text-left'>Myself</p>
                        </div>
                        <div className="w-[200px] h-[150px] lg:ml-2 my-3 flex flex-col items-center justify-center border border-[#C9C9C9] rounded-lg">
                            <img src={team} alt="" srcset="" />
                            <p className='block text-black text-lg roboto font-bold text-left'>A Team Member</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
