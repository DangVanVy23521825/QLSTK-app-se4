"use client";

import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md">
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button className="w-1/2 text-center pb-2 border-b-2 border-pink-500 font-semibold text-pink-600">
          Sign In
        </button>
        <button className="w-1/2 text-center pb-2 text-gray-600">
          Sign Up
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Email/Phone Number
          </label>
          <input
            type="text"
            placeholder="Email/Phone Number"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Password
          </label>
          <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </div>
          </div>
        </div>

        <div className="text-right text-sm text-pink-600 hover:underline cursor-pointer">
          Forgot Password?
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}