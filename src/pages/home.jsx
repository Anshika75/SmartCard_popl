import React from 'react'
import ProfileCard from '../components/profileCard'
import PlusCard from '../components/plusCard'

export default function Home() {
  return (
    <>
        <div className="flex min-h-screen bg-[#F1F1F1] p-20">
        <ProfileCard/>
        ...........................
        <PlusCard/>
        </div>
    </>
  )
}
