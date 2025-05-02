import NewsImage from "@/components/FallBackImg/NewsImage";
import HomeNewsTime from "@/components/Time/HomeNewsTime";
import { BreakingNewsProps } from "@/lib/types/BreakingNewsProps";
import Link from "next/link";
import React from "react";

export default function BreakingNewsItems({
  breakingItems,
}: BreakingNewsProps) {
  const featured = breakingItems.slice(0, 1);
  const nonFeatured = breakingItems.slice(1, 4);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Featured Section: Spans 8 columns on large screens */}
        <div className="col-span-12 lg:col-span-8">
          {featured.map((item: any) => (
            <div key={item.id}>
              <Link
                href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
                key={item.id}
              >
                <div className="card bg-main shadow-sm">
                  <figure className="relative overflow-hidden">
                    <NewsImage
                      news={{
                        ...item,
                        title_img: item.title_img || "fallback.jpg",
                      }}
                      heightClass="h-[515px]"
                      widthClass="w-full"
                      hoverEffect={true}
                    />
                  </figure>
                  <div className="card-body rounded-lg text-white">
                    <h2 className="card-title text-2xl">{item.news_title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Non-featured Section: Spans 4 columns on large screens */}
        <div className="col-span-12 space-y-4 lg:col-span-4">
          {nonFeatured.map((item: any) => (
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
                    <h2 className="card-title line-clamp-3 text-base leading-tight">
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
      </div>
    </div>
  );
}
