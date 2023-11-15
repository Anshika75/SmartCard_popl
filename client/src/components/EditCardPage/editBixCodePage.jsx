import React from 'react'

function EditBixCodePage({editcard,setEditCard}) {
  return (
    <div className="flex flex-col items-center w-[100%] py-8 px-6 bg-white rounded-tr-3xl rounded-br-3xl">
        <div className="flex flex-col items-center w-[100%] py-8 px-6 bg-white rounded-tr-3xl rounded-br-3xl">
        <h1 className="text-6xl text-center text-black font-normal justHand">BixID &nbsp;</h1>
        <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer menuActive">
             My Cards     </p>
        <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
             Contacts
        </p>
        </div></div>
  )
}

export default EditBixCodePage