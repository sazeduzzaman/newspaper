import Link from "next/link";
import DynamicBanglaDate from "@/components/DynamicBanglaDate/page";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { newsCategory } from "@/lib/apis/NewsCategory";
import NewsCategory from "./NewsCategory/NewsCategory";

export default async function Page() {
  const categoryItems = await newsCategory(); // Fetch data from the server


  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-700 px-4 py-2 text-center text-white dark:text-white">
        <div className="container mx-auto grid grid-cols-1 items-center md:grid-cols-3">
          {/* Current Date */}
          <div className="text-start text-[14px]">
            <DynamicBanglaDate />
          </div>

          {/* Some Links */}
          <div className="space-x-4 text-center">
            <Link href="#" className="text-[14px] hover:underline">
              বিজ্ঞাপন
            </Link>
            <Link href="/epaper" className="text-[14px] hover:underline">
              ই-পেপার
            </Link>
            <Link href="/search" className="text-[14px] hover:underline">
              আর্কাইভ
            </Link>
            <Link
              href="/advertisement/adcost"
              className="text-[14px] hover:underline"
            >
              বিজ্ঞাপনের মূল্য
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-x-4">
            <SocialLinks />
          </div>
        </div>
      </div>
      <NewsCategory categoryItems={categoryItems}/>
    </>
  );
}
