import NewsImage from "@/components/FallBackImg/NewsImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import HomeNewsTime from "@/components/Time/HomeNewsTime";
import { MostViewedNewsProps } from "@/lib/types/MostViewedNews";
import Link from "next/link";
import React from "react";

export default function MostViewedNewsItems({
  mostViewedItems,
}: MostViewedNewsProps) {
  console.log(mostViewedItems, "mostViewedItems");
  const ViewedItems = mostViewedItems.slice(0, 9);

  return (
    <div className="container mx-auto">
      <div className="mb-3">
        <SectionHeader title="সর্বাধিক পঠিত" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Loop through mostViewedItems and create card for each */}
        {ViewedItems.map((item: any) => (
          <div key={item.id}>
            <Link
              href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
              key={item.id}
            >
              <div className="card bg-white text-main shadow-sm">
                <figure className="relative overflow-hidden">
                  <NewsImage
                    news={{
                      ...item,
                      title_img: item.title_img || "fallback.jpg",
                    }}
                    heightClass="h-40"
                    widthClass="w-full"
                    hoverEffect={true}
                  />
                </figure>
                {/* <div className="card-body h-28 rounded-lg text-main">
                  <h2 className="text-1xl">{item.news_title}</h2>
                  <div className="flex w-full items-center justify-between pt-2">
                    <span className="text-red">
                      {item.category_name_bangla}
                    </span>
                    <HomeNewsTime
                      newsTime={item.news_time || new Date().toISOString()}
                    />
                  </div>
                </div> */}
                <div className="card-body p-4 h-28 rounded-lg text-main">
                  <h2 className="card-title font-normal  text-base leading-6">
                    {item.news_title}
                  </h2>
                  <div className="pt-2 flex justify-between items-center">
                    <div>
                      <span className="text-red">
                        {item.category_name_bangla}
                      </span>
                    </div>
                    <div>
                      <HomeNewsTime
                        newsTime={item.news_time || new Date().toISOString()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
