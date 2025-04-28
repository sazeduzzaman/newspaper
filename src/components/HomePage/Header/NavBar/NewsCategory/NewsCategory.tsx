import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { NewsCategoryProps } from "@/lib/types/NewsCategoryData";
import CategoryList from "../CategoryList";
import Marquee from "./Marquee";

export default function NewsCategory({ categoryItems }: NewsCategoryProps) {
  return (
    <>
      <div>
        {/* Marquee Bar */}
        <Marquee />

        <div className="container mx-auto flex h-25 items-center justify-between shadow-2xs">
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
          <div className="hidden flex-shrink-0 items-center gap-2 lg:flex">
            <Link href="/search">
              <button className="search-btn">
                <FaSearch />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="text-violet-600 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
      <div className="mx-auto flex w-full items-center bg-sky-700">
        <CategoryList categoryItems={categoryItems} />
      </div>
    </>
  );
}
