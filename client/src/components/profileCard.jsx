import React from 'react'
import Cover from '../assets/Cover.png'
import Profile from '../assets/Profile.png'
import edit from '../assets/edit.png';
import share from '../assets/share.png';

export default function ProfileCard() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const usr = JSON.parse(localStorage.getItem("user"));
        setUser(usr);
    }, [])
    if (!user) return <Redirect to="/login" />
    if(user){
        console.log(user)
        return <>
            <div className="w-[450px] h-[340px] bg-white rounded-lg flex flex-col items-center p-4 mx-3">
                <div className='relative'>
                    <img src={user.CoverImage} alt="" />
                    <img className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' src={user.ProfileImage} alt="" />
                </div>
                <p className='block text-black text-xl roboto font-bold text-center mt-16'>{user.FirstName} {user.LastName}</p>
                <h1 className="text-xl font-normal text-center text-[#C9C9C9] roboto"> {user.AboutText}</h1>
                <div className="flex mt-2">
                    <button className='mx-1 flex flex-row justify-center itemx-center px-4 py-2 rounded-full border-gray-300 border '>
                        <img className='mr-2 mt-1' src={edit} alt="" />
                        Edit Card
                    </button>
                    <button className='mx-1 flex flex-row justify-center itemx-center px-4 py-2 rounded-full bg-black text-white'>
                        <img className='mr-2' src={share} alt="" />
                        Share Card
                    </button>
                </div>
            </div>
        </>
    }
}
