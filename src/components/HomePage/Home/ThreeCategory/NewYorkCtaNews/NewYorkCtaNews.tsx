import NewsImage from "@/components/FallBackImg/NewsImage";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import HomeNewsTime from "@/components/Time/HomeNewsTime";
import { NewYorkNewsProps } from "@/lib/types/NewYorkNewsProps";
import Link from "next/link";
import React from "react";

export default function NewYorkCtaNews({ newYorkNewsData }: NewYorkNewsProps) {
  const featured = newYorkNewsData.filter(
    (item: any) => item.is_featured === 1,
  );
  const nonFeatured = newYorkNewsData.filter(
    (item: any) => item.is_featured !== 1,
  );

  const featureItems = featured.slice(0, 1);
  const nonFeaturedItems = nonFeatured.slice(0, 6);
  return (
    <div>
      <SectionHeader title="নিউইয়র্ক" />
      {featureItems.map((item: any) => (
        <div key={item.id} className="mt-4">
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
                  heightClass="h-60"
                  widthClass="w-full"
                  hoverEffect={true}
                />
              </figure>
              <div className="card-body h-28 rounded-lg p-4 text-main">
                <h2 className="card-title text-base leading-6 font-normal">
                  {item.news_title}
                </h2>
                <div className="flex items-center justify-between pt-2">
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

      {nonFeaturedItems.map((item: any, index: number) => (
        <div key={item.id} className="mt-4">
          <Link
            href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
          >
            <div className="card bg-white text-main shadow-none">
              <div
                className={`card-body flex items-start justify-center p-0 text-main ${
                  index !== nonFeaturedItems.length - 1 ? "border-b-1" : ""
                }`}
              >
                <h2 className="mb-0 card-title text-base font-normal">
                  {item.news_title}
                </h2>
                <div className="flex items-center justify-between pb-2">
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
  );
}
