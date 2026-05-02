"use client";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handleLoginFun = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Login Form data: ", email, password);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-md bg-white">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>
        <form className="mt-10 space-y-2" onSubmit={handleLoginFun}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              name="email"
              type="text"
              className="input"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </fieldset>

          <button className="btn btn-outline btn-success w-full">Login</button>
        </form>
        <p className="mt-4">
          Don't have an accout?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
