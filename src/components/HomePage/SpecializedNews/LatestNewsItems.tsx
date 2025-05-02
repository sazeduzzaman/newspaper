import NewsImage from "@/components/FallBackImg/NewsImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import HomeNewsTime from "@/components/Time/HomeNewsTime";
import { LatestNewsProps } from "@/lib/types/LatestNewsProps";
import Link from "next/link";
import React from "react";

export default function LatestNewsItems({ latestItems }: LatestNewsProps) {
  console.log(latestItems, "latestItems");

  return (
    <>
      <div className="mb-3">
        <SectionHeader title="সর্বশেষ আজকাল" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1">
        {/* Map through latestItems */}
        {latestItems.map((item: any) => (
          <div key={item.id}>
            <Link
              href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
              key={item.id}
            >
              <div className="card card-side items-center bg-base-100 shadow-sm">
                <figure className="h-[130px] w-[180px] flex-shrink-0 overflow-hidden">
                  <NewsImage
                    news={{
                      ...item,
                      title_img: item.title_img || "fallback.jpg",
                    }}
                    heightClass="h-full"
                    widthClass="w-full"
                    hoverEffect={true}
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-base leading-tight">
                    {item.news_title}
                  </h2>
                  <div className="pt-2">
                    <span className="text-red">
                      {item.category_name_bangla}
                    </span>
                    <HomeNewsTime
                      newsTime={item.news_time || new Date().toISOString()}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
