import React from 'react'

export default function IconsAddModel   ({socialMedia,setModelOpen}) {
  return (
    <div className={
        "flex absolute w-full h-screen z-50 items-center justify-center overflow-visible"
    }>
        <div className={
            "card flex flex-col items-center justify-center w-[90%] h-[90%] bg-gray-600 rounded-lg p-4 overflow-visible"
        }>
            {/* close button */}
            <div className="w-full flex justify-end p-5 overflow-visible" onClick={
                () => {
                    setModelOpen(false)
                }
            }>
                <i className="fa-solid fa-times text-white text-3xl cursor-pointer mt-8"></i>
            </div>
            {/* Add all icons list here */}
            <div className="w-full flex flex-row justify-between flex-wrap ">
                {
                    socialMedia.recommended.map((item, index) => {
                        return (
                            <div className="flex flex-col items-center justify-center w-28">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#F7F7F7] flex items-center justify-center mr-2">
                                    <i className={item.icon}></i>
                                </div>
                                <p className="text-white text-sm roboto">{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>


  )
}
