"use client";

import React, { useState } from "react";
import Link from "next/link";
import DynamicBanglaDate from "@/components/DynamicBanglaDate/page";
import SocialLinks from "@/components/SocialLinks/page";
import { FaSearch } from "react-icons/fa";

const menuItems = [
  { name: "হোম", href: "/" },
  { name: "এবাউট", href: "/about" },
  { name: "সার্ভিসেস", href: "/services" },
  { name: "যোগাযোগ", href: "/contact" },
];
const page = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-700 dark:text-white text-white text-center px-4 py-2">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Current Date */}
          <div className="text-start text-[14px]">
            <DynamicBanglaDate />
          </div>

          {/* Some Links */}
          <div className="space-x-4 text-center">
            <Link href="#about" className="hover:underline text-[14px]">
              বিজ্ঞাপন
            </Link>
            <Link href="#services" className="hover:underline text-[14px]">
              ই-পেপার
            </Link>
            <Link href="#contact" className="hover:underline text-[14px]">
              আর্কাইভ
            </Link>
            <Link href="#contact" className="hover:underline text-[14px]">
              বিজ্ঞাপনের মূল্য
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-x-4">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Middle Marque And Logo Bar */}
      <div>
        <div className="mx-auto flex items-center">
          <p className="text-center w-full mb-0 pt-2">Marquee</p>
        </div>
        <div className="container flex justify-between h-25 mx-auto items-center shadow-2xs">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Back to homepage"
          >
            <img
              className="w-[250px]"
              src="	https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Flogo_red.png&w=384&q=75"
              alt=""
            />
          </Link>

          {/* Desktop Menu */}
          <div className="mx-auto">
            <img
              className="w-full"
              src="/assets/images/ad-placeholder.jpg"
              alt=""
            />
          </div>
          {/* <ul className="items-stretch hidden space-x-3 lg:flex">
            {menuItems.map((item, index) => (
              <li className="flex" key={index}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 transition-all duration-200 dark:text-violet-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* Auth Buttons */}
          <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-violet-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Category Bar Bar */}
      <div className="bg-sky-700 mx-auto flex items-center py-5 w-full">
        {/* Desktop Menu */}
        <ul className="items-stretch hidden space-x-3 lg:flex mx-auto">
          {menuItems.map((item, index) => (
            <li className="flex" key={index}>
              <Link
                href={item.href}
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 transition-all duration-200 dark:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2 px-4 pb-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 rounded hover:bg-violet-100 text-violet-600 transition"
            >
              {item.name}
            </Link>
          ))}
          <hr />
          <Link
            href="/auth/login"
            className="block px-4 py-2 rounded text-center border border-violet-600 text-violet-600 hover:bg-violet-50"
          >
            লগিন করুন
          </Link>
          <Link
            href="/auth/register"
            className="block px-4 py-2 text-center rounded bg-violet-600 text-white hover:bg-violet-700"
          >
            রেজিস্টার করুন
          </Link>
        </div>
      )}
    </>
  );
};

export default page;
