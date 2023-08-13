"use client";
import Link from "next/link";
import React, { useEffect , useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


const SignupPage = () => {

  const router= useRouter();


  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const[buttonDisabled, setButtonDisabled] = React.useState(true);  
  const [loading, setLoading] = React.useState(false);


  useEffect(()=>{

    const isFormValid=user.email !== "" && user.username !== "" && user.password !== "";
    setButtonDisabled(!isFormValid)

  },[user]);


  const handleSubmit = async () => {
    try {

      setLoading(true);
      const response = await axios.post("/api/signup", user);
      console.log("Signup success", response.data);
      router.push("./login");
      
      
    } catch (error: any) {
      console.log("signup fail", error.message);
      toast.error(error.message)
    }
    finally{
      setLoading(false)
      
    }
    
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div  className="w-full max-w-sm mt-8">
        <div>
          <h1>{loading ? "loading": "sing up"}</h1>
        </div>
        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
          
        />

        <label htmlFor="username" className="mb-2">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          placeholder="Enter your username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
          
        />

        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
          
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${buttonDisabled ?  'opacity-50 cursor-not-allowed': ''}`}
        >
          Submit
        </button>
      </div>
      <h6 className="mt-4">Already have an account?</h6>
        <Link href={"./login"} className="text-blue-500 underline">
          Sign In
        </Link>
    </div>
  );
};

export default SignupPage;
