import React from "react";
import HeroSection from "@/components/HomePage/HeroSection/page";

export const metadata = {
  title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
  openGraph: {
    type: "website",
    url: "https://www.ajkal.us",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: ["https://ajkal.us/img/settings/placeholder.jpg"],
  },
  canonicalUrl: "https://www.ajkal.us",
};

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
