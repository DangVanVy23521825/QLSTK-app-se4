"use client";

export default function SignUpForm() {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button className="w-1/2 text-center pb-2 text-gray-600 hover:text-pink-500">
          Sign In
        </button>
        <button className="w-1/2 text-center pb-2 border-b-2 border-pink-500 font-semibold text-pink-600">
          Sign Up
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}