"use client"

import Link from 'next/link';
import axios from 'axios';
import React, {  useState } from "react";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { TailSpin } from "react-loader-spinner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.trim() === '') {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must have at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const onLogin = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        setLoading(true);
        const response = await axios.post('/api/login', { email, password });
        console.log('Login success', response.data);
        toast.success('Login success');
        router.push('/profile');
      } catch (error: any) {
        console.log('Login failed', error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm mt-8 p-6 bg-white rounded shadow-lg">
      <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold">{loading ? (<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <TailSpin color="#00BFFF" height={50} width={50} />
        </div>) : ('Login')}</h1>
            </div>
        
        

        <label htmlFor="email" className="mb-2">Email</label>
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {emailError && <span>{emailError}</span>}

        <label htmlFor="password" className="mb-2">Password</label>
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {passwordError && <span>{passwordError}</span>}

        <button
          onClick={onLogin}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing' : 'Login'}
        </button>
        <div className="flex justify-start items-center mt-4 space-x-2"> {/* This is the flex container */}
  <h6>New User?</h6>
  <Link href={"/signup"}>
    <p className="text-blue-500 underline hover:text-blue-700">Visit Signup page</p>
  </Link>
</div>
      </div>
     
    </div>
  );
}
