import Link from "next/link";
import CategoryList from "./CategoryList";
import { FaSearch } from "react-icons/fa";
import { NewsCategoryProps } from "@/lib/types/NewsCategoryData";

export default function NewsCategory({ categoryItems }: NewsCategoryProps) {
  return (
    <>
      <div>
        {/* Marquee Bar */}
        <div className="mx-auto flex items-center mt-1">
          <div className="container flex justify-between mx-auto items-center bg-red-500 rounded-md">
            <p className="text-center w-full mb-0 py-2 text-white">Marquee</p>
          </div>
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
              src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Flogo_red.png&w=384&q=75"
              alt="Ajkal Logo"
            />
          </Link>

          {/* Advertisement Banner */}
          <div className="mx-auto">
            <img
              className="w-full rounded-md"
              src="/assets/images/ad-placeholder.jpg"
              alt="Advertisement"
            />
          </div>

          {/* Auth Buttons */}
          <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
            <Link href="/search">
              <button className="search-btn">
                <FaSearch />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-violet-600"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-sky-700 mx-auto flex items-center w-full">
        <CategoryList categoryItems={categoryItems} />
      </div>
    </>
  );
}
