"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterFunc = (data) => {
    console.log("Register Data: ", data);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-md bg-white">
        <h2 className="font-bold text-3xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              {...register("name", { required: "Enter Your Name" })}
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo", { required: "Enter your valid photo URL" })}
              type="text"
              className="input"
              placeholder="Enter your photo"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              {...register("email", { required: "Enter your valid email" })}
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", { required: "Enter your password" })}
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button className="btn btn-outline btn-success w-full mt-5">
            Register
          </button>
        </form>
        <p>
          Yout have already an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
