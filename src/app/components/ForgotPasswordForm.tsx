"use client";

export default function ForgotPasswordForm() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-center text-xl font-bold text-pink-600 mb-4">
        Reset Your Password
      </h2>
      <hr className="border-t-2 border-pink-500 mb-6" />

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="text-sm text-pink-600 hover:underline cursor-pointer text-center">
          Send Passcode To Your Email Address
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Passcode
          </label>
          <input
            type="text"
            placeholder="Passcode"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
          CONTINUE
        </button>
      </form>
    </div>
  );
}