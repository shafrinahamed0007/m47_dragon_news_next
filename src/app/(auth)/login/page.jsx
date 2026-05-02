"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginFun = (data) => {
    console.log("Login form data using react hook form: ", data);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-md bg-white">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>
        <form
          className="mt-10 space-y-2"
          onSubmit={handleSubmit(handleLoginFun)}
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              {...register("email")}
              type="text"
              className="input"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password")}
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
