// This file must be in a server component (e.g. /app/pages/ or /app/someComponent.tsx)

import React from "react";
import { FaNewspaper } from "react-icons/fa";
import NewsImage from "../FallBackImg/NewsImage";
import Link from "next/link";

interface NewsItem {
  id: number;
  news_title: string;
  news_author: string;
  news_detail: string;
  category_name_bangla: string;
  news_time: string;
  title_img: string;
  news_short_brief: string;
  category_id: number;
  category_name: string;
}

interface CategoryDataProps {
  catId: number;
}

// Shuffle helper
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default async function RecentNews({ catId }: CategoryDataProps) {
  //   const res = await fetch(
  //     `https://backoffice.ajkal.us/category-news/${catId}`,
  //     {
  //       cache: "no-store", // ensures fresh fetch on each request
  //     },
  //   );
  const res = await fetch(
    `https://backoffice.ajkal.us/category-news/${catId}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    return <div>❌ News not found.</div>;
  }

  const json = await res.json();

  if (!json?.data) {
    return <div>❌ News not found.</div>;
  }

  const newsDetails: NewsItem[] = json.data;

  // Get 4 random items on each load
  const catNews = getRandomItems(newsDetails, 4);
  return (
    <div>
      <div className="inline-flex items-center border-b border-black pb-1 text-main">
        <FaNewspaper className="me-2" size={40} />
        <h1 className="text-2xl font-semibold">
          <span>সম্পর্কিত খবর</span>
        </h1>
      </div>

      <div className="mt-5 mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {catNews.map((news, index) => (
          <div key={index}>
            <Link
              href={`/details/${news.category_name.toLowerCase()}/${news.id}`}
            >
              <div className="card w-full bg-base-100 shadow-lg">
                <figure>
                  <NewsImage
                    news={news}
                    heightClass="h-50"
                    widthClass="w-full"
                    hoverEffect={true}
                  />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-start">
                    <div className="badge-outline badge text-sm">
                      {news.category_name_bangla}
                    </div>
                  </div>
                  <h2 className="text-1xl h-10 text-start">
                    {news.news_title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
