import React from "react";
import PreviewProfileCard from "./previewProfileCard";

function EditBixCodePage({ editcard, setEditCard }) {
  return (
    <div className="flex w-full min-w-fit">
      <div className="w-full lg:w-[55%] flex flex-col py-16 px-4 lg:px-4">
        <div className="flex flex-col items-center w-[100%] py-8 px-6 bg-white rounded-tr-3xl rounded-br-3xl">
          <div className="flex flex-col items-center w-[100%] py-8 px-6 bg-white rounded-tr-3xl rounded-br-3xl">
            <h1 className="text-6xl text-center text-black font-normal justHand">
              BixID &nbsp;
            </h1>
            <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer menuActive">
              My Cards{" "}
            </p>
            <p className="flex items-center text-[#C9C9C9] font-medium roboto text-base my-6 py-3 px-2 rounded-xl w-full transition-all hover:bg-[#f7f7f7] hover:text-black cursor-pointer">
              Contacts
            </p>
          </div>
        </div>

        <div className="flex w-full justify-end self-end lg:justify-end items-center mt-4">
          <button className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full border-gray-300 border ">
            Cancel
          </button>
          <button
            className="mx-1 text-sm lg:text-base flex flex-row justify-center itemx-center px-12 py-2 rounded-full bg-black text-white"
            onClick={(e) => {
              e.preventDefault();
              fetch(
                `http://localhost:9000/user/edit-Card/${user._id}/${editcard._id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(editcard),
                }
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  // update card in local storage
                  const usr = JSON.parse(
                    StateMananger.localStorage.getItem("user")
                  );
                  const newCards = usr.Cards.map((card) => {
                    if (card._id == editcard._id) {
                      return editcard;
                    }
                    return card;
                  });
                  usr.Cards = newCards;
                  StateMananger.localStorage.setItem(
                    "user",
                    JSON.stringify(usr)
                  );
                });
            }}
          >
            Update
          </button>
        </div>
      </div>
      <div className="w-[25%] px-4 hidden lg:flex flex-col items-center border-l-2 border-l-[#F7F7F7] py-16">
        <p className="roboto text-[#828282]">Card Live Preview</p>
        <p className="roboto text-[#67ABFA] mb-4">
          View Card <i className="fa-solid fa-link"></i>
        </p>
        <PreviewProfileCard card={editcard} />
      </div>
    </div>
  );
}

export default EditBixCodePage;
