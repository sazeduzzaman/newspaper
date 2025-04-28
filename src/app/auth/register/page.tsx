import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../auth.css";

const page = () => {
  return (
    <div className="dark:bg-white">
      <div className="container mx-auto sm:px-0 py-10">
        <div className="shadow-sm w-2/3 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full bg-white shadow-2xl p-10 rounded-lg">
              <div className="flex justify-center flex-col items-center mb-10">
                <h2 className="card-title text-black text-3xl md:text-3xl">
                  রেজিস্টার করুন !
                </h2>
                <p className="text-black">সাপ্তাহিক আজকালে আপনাকে স্বাগতম।</p>
                <div>
                  <span className="divider"></span>
                </div>
              </div>
              {/* Form */}
              <form action="" method="post" className="space-y-4">
                <div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-900 text-start">
                      আপনার নাম
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="আপনার ইমেইল দিন"
                        className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-900 text-start">
                      আপনার ফোন নাম্বার
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="আপনার ইমেইল দিন"
                        className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-900 text-start">
                      ইমেইল দিন
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="আপনার ইমেইল দিন"
                        className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-900 text-start">
                      পাসওয়ার্ড দিন
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="আপনার ইমেইল দিন"
                        className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-900 text-start">
                      ঠিকানা
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="আপনার ইমেইল দিন"
                        className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10">
                  <p className="text-black">
                    আপনার একাউন্ট আছে, তাহলে? <br />
                    <Link
                      href="/auth/login"
                      className="text-[#165588] font-bold"
                    >
                      লগিন করুন!
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    // className="bg-primary text-white rounded-md py-3 px-20 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                    className="submit-btn-one w-2/4"
                  >
                    এগিয়ে যান
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-black">
                    পাসওয়ার্ড ভুলে গেছেন? <br />
                    <Link
                      href="/auth/login"
                      className="text-[#165588] font-bold"
                    >
                      পরিবর্তন করুন!
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Second Column: Background Image with Overlay Text */}
            <div className="relative w-full bg-cover rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/assets/images/others/classification-of-advertising.jpg"
                // src="/assets/images/others/Newspaper.jpg"
                alt="Background Image"
              />
              <div className="absolute inset-0 bg-[#165588] opacity-80 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-3xl font-bold mb-4 ">
                  ফিরে আসার জন্য আপনাকে <br /> স্বাগতম !
                </h1>
                <p className="text-lg">
                  যদি আপনার বিজ্ঞাপনের তথ্য প্রয়োজন হয়, <br /> তবে আপনার লগইনের
                  পরে আপনার <br /> অ্যাকাউন্টে দেখানো হবে, অথবা
                </p>
                <div className="mt-5">
                  <Link
                    href="/auth/register"
                    className="hover:underline font-bold flex items-center"
                  >
                    ক্লিক করুন <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
