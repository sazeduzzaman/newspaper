import React from "react";
import HeroSection from "@/components/HomePage/HeroSection/page";

export default function Page() {
  return (
    <>
      <div className="dark:bg-white dark:text-gray-800 py-10">
        {/*Home Section Start */}
        <HeroSection />
        {/*Home Section End */}
      </div>
    </>
  );
}
