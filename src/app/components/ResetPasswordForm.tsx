"use client";

export default function ResetPasswordForm() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-center text-xl font-bold text-pink-600 mb-4">
        Reset Your Password
      </h2>
      <hr className="border-t-2 border-pink-500 mb-6" />

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Enter your new password
          </label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">
            Confirm your password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
          RESET YOUR PASSWORD
        </button>
      </form>
    </div>
  );
}