"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm mt-8">
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
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
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
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <h6 className="mt-4">Not account?</h6>
        <Link href={"./signup"} className="text-blue-500 underline">
          Sign Up
        </Link>
    </div>
  );
};

export default LoginPage;
