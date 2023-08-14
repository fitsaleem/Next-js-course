'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const ProfilePage = () => {

  let router=useRouter();

  const [data ,setData]=React.useState("nothing");

  const logout= async()=>{

    try {
      await axios.get("/api/logout");
      toast.success("Logout Successfully");
      router.push("/login")

    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  // fatching user details from database

const getUserDetails=async ()=>{
      const res= await axios.get("/api/userData")
      console.log(res.data);
      setData(res.data.data._id)

}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">Profile page</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">{data==="nothing" ? "Nothing user data avaliable" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <div>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-150" onClick={logout}>
          Logout
        </button>
        <button className="px-6 py-2 px-7 mx-7 text-white bg-green-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-150" onClick={getUserDetails}>
         Get user Details
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
