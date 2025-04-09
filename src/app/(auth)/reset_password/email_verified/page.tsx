"use client";

import ForgotPasswordForm from "../../../components/ForgotPasswordForm";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#FF086A] via-[#FB5D5D] to-[#F19BDB]">
      {/* Header */}
      <header className="w-full bg-white shadow-sm p-4 pl-6">
        <div className="flex items-center">
          <Image
            src="/assets/images/logo_header_signin.png"
            alt="MonNes Small Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(90deg, #FF086A 0%, #FB5D5D 44%, #F19BDB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MONNES
          </span>
        </div>
      </header>

      {/* Form Centered */}
      <main className="flex-1 flex justify-center items-center px-6">
        <div className="flex w-full max-w-6xl items-center">
            {/* Vùng bên trái (logo) chiếm 1/2 */}
            <div className="w-1/2 hidden md:flex flex-col items-center justify-center text-white">
            <Image
                src="/assets/images/logo_signin.png"
                alt="MonNes Large Logo"
                width={140}
                height={140}
            />
            <span className="mt-4 text-3xl font-bold">MonNes</span>
            </div>

            {/* Vùng bên phải (form) chiếm 1/2 */}
            <div className="w-1/2 flex justify-center">
            <div className="w-full max-w-md">
                <ForgotPasswordForm />
            </div>
            </div>
        </div>
      </main>
    </div>
  );
}