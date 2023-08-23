"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

const SignupPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const isFormValid =
      user.email !== "" &&
      user.username !== "" &&
      user.password !== "" &&
      user.password === user.confirmPassword;
    setButtonDisabled(!isFormValid);
  }, [user]);

  const handleSubmit = async () => {
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match"); // show error if passwords do not match
      return;
    }
    if (!user.email.includes("@")) {
      toast.error("Invalid email"); // show error if email is invalid
      return;
    }
    if (user.username.length < 5) {
      toast.error("Username should be at least 5 characters long"); // show error if username is too short
      return;
    }
    if (user.password.length < 8) {
      toast.error("Password should be at least 8 characters long"); // show error if password is too short
      return;
    }
    if (!/[a-zA-Z]/.test(user.password)) {
      toast.error("Password should contain at least one alpha character"); // show error if password does not contain alpha character
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)) {
      toast.error("Password should contain at least one special character"); // show error if password does not contain special character
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/signup", user);
      console.log("Signup success", response.data);
      router.push("./login");
    } catch (error: any) {
      console.log("signup fail", error.message);
      if (error.response && error.response.status === 400) {
        toast.error("User already exists");
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center cursor-pointer">
        <Toaster />
      </div>
      {loading ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <TailSpin color="#00BFFF" height={50} width={50} />
        </div>
      ) : (
        <>
          <div className="w-full max-w-sm mt-8 p-6 bg-white rounded shadow-lg">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold">Signup</h1>
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

            <label htmlFor="confirmPassword" className="mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
            />



            <button
              type="submit"
              onClick={handleSubmit}
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </button>
            <div className="flex justify-start items-center mt-4 space-x-2"> {/* This is the flex container */}
  <h6>Already have an account?</h6>
  <Link href={"./login"}>
    <p className="text-blue-500 underline hover:text-blue-700">Sign In</p>
  </Link>
</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignupPage;
