import React from 'react'
import ProfileCard from '../components/profileCard'
import PlusCard from '../components/plusCard'
import LeftNav from '../components/leftNav'
import RightNav from '../components/rightNav'

export default function Home() {
  return (
    <>
        <div className="flex min-h-screen bg-[#F1F1F1]">
        <RightNav/>
        {/* <LeftNav/> */}
        {/* <ProfileCard/>
        ...........................
        <PlusCard/> */}
        </div>
    </>
  )
}
