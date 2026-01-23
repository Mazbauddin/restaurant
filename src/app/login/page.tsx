import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* Box */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* Image Container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="Login Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Form Container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p className="">
            Log into your account or create a new one using the social buttons
            below.
          </p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Sign in With Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Sign in With Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link className="underline" href="/">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
