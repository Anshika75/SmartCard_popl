import React, { useState } from 'react';
import Google from '../assets/GoogleLogo.png';
import Microsoft from '../assets/MicrosoftLogo.png';
import Amazon from "../assets/Laptop/amazon.png"
import careem from "../assets/Laptop/careem.png"
import hubspot from "../assets/Laptop/hubspot.png"
import jeep from "../assets/Laptop/jeep.png"
import chat from "../assets/chat.png"
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        // Add your login logic here
        if (username === 'your_username' && password === 'your_password') {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#F1F1F1]">
            <div className="left w-full px-16 md:w-1/2 bg-white py-16 md:py-0 md:min-h-screen rounded-tr-3xl rounded-br-3xl flex flex-row items-center justify-center md:px-10 xl:px-20">
                <form className="box flex flex-col w-full">
                    <div className="flex md:mb-0 xl:mb-6">
                        <h1 className="text-3xl font-bold text-center text-black justHand">BixID &nbsp;</h1>
                        <h1 className="text-xl font-normal text-center text-[#C9C9C9]  roboto"> | Log in</h1>
                    </div>
                    <div className="my-4">
                        <label
                            className="block text-gray-700 text-sm roboto font-bold mb-2"
                            htmlFor="Email"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            className="appearance-none roboto rounded w-full py-2 px-3 text-gray-700 leading-tight bg-[#F7F7F7] focus:outline-none"
                        />
                    </div>
                    <div className="my-4">
                        <label
                            className="block text-gray-700 text-sm roboto font-bold mb-2"
                            htmlFor="Password"
                        >
                            Password
                        </label>
                        <input
                            type="passwordt"
                            id="email"
                            placeholder="Password"
                            className="appearance-none roboto rounded w-full py-2 px-3 text-gray-700 leading-tight bg-[#F7F7F7] focus:outline-none"
                        />
                        <p className='block text-black text-sm roboto font-bold my-2 text-right'>Forgot Password ?</p>
                        <button className='bg-black text-white w-full py-2 px-3 rounded-3xl my-8'>Sign in</button>
                        <p className='block text-[#DBDBDB] text-sm roboto font-bold text-center'>
                            <span className='relative before:absolute before:top-[50%] before:left-0 before:translate-x-[-110%] before:h-[2px] before:w-[100px] before:bg-[#DBDBDB] after:absolute after:top-[50%] after:right-0 after:translate-x-[110%] after:h-[2px] after:w-[100px] after:bg-[#dbdbdb]'>OR</span>
                        </p>
                        <button className='bg-white text-black border border-black w-full py-2 px-3 rounded-3xl mt-8 mb-6 flex justify-center items-center'> <img src={Google} alt="" className='mr-3 scale-90' /> Continue with Google</button>
                        <button className='bg-white text-black border border-black w-full py-2 px-3 rounded-3xl flex justify-center items-center'>  <img src={Microsoft} alt="" className='mr-3 scale-75' /> Continue with Microsoft</button>
                        <p className='block text-black text-sm roboto font-semibold mt-4 text-center'>New to BixID ? <span className='text-[#67ABFA]'>Create Account</span></p>
                    </div>
                </form>
            </div>

            <div className="right relative flex flex-col items-center justify-end w-full my-12 md:my-0 md:pb-20 px-20">
                <div className='hidden md:block absolute bottom-3 right-3 scale-75'>
                    <img src={chat} alt="" />
                </div>
                <p className='block text-black text-xl roboto font-bold my-2 text-center'>Trusted By</p>
                <div className="grid grid-cols-4 place-items-center w-full my-4">
                    <img src={Amazon} alt="" />
                    <img src={jeep} alt="" />
                    <img src={careem} alt="" />
                    <img src={hubspot} alt="" />
                </div>
                <div className="grid grid-cols-4 place-items-center w-full my-4">
                    <img src={Amazon} alt="" />
                    <img src={jeep} alt="" />
                    <img src={careem} alt="" />
                    <img src={hubspot} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Login;


{/* <div className="w-full max-w-sm">
        <form
          onSubmit={login}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div> */}