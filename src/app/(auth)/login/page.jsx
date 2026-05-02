"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFun = async (data) => {
    console.log("Login form data using react hook form: ", data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };
  console.log("Form Error:", errors);

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
              {...register("email", { required: "Email field is required" })}
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
              {...register("password", {
                required: "Password field is requried",
              })}
              type="password"
              className="input"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
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
