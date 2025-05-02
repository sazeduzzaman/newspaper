import React from "react";
import NewsTime from "../Time/NewsTime";
import RecentNews from "./RecentNews";
import Link from "next/link";
import NewsImage from "../FallBackImg/NewsImage";
import NewsActions from "../NewsActions/NewsActions";

// Define the type for the news data prop
interface NewsData {
  id: number;
  news_title: string;
  news_author: string;
  news_detail: string;
  category_name_bangla: string;
  news_time: string;
  title_img: string;
  news_short_brief: string;
  category_id: number;
}

interface NewsDetailsProps {
  data: Partial<NewsData> | null | undefined;
}

export default function NewsDetails({ data }: NewsDetailsProps) {
  // Fallback if data is not valid
  if (!data || typeof data !== "object" || !data.news_title) {
    return <div className="text-red-500">❌ Invalid or missing news data.</div>;
  }

  // Helper to remove image tags from the news content
  const removeImgTags = (html: string) => {
    return html.replace(/<img[^>]*>/g, ""); // Remove all <img> tags
  };

  const cleanedHtml = removeImgTags(data.news_detail || "");

  return (
    <div>
      <div>
        <div className="pt-5">
          <h2 className="main-text inline-block border-b-2 text-2xl font-bold">
            <Link href={`/category/${data.category_id || 0}`}>
              {data.category_name_bangla || "Category"}
            </Link>
          </h2>
          <h1 className="py-8 text-4xl">
            {data.news_title || "Untitled News"}
          </h1>
        </div>

        {/* Author Section */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-15 w-15 rounded-full object-cover"
              src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Fplaceholder.jpg&w=640&q=75"
              alt={data.news_title || "Author image"}
            />
            <div className="ps-3">
              <p className="main-text font-semibold">
                {data.news_author || "Unknown Author"}
              </p>
              <div className="text-gray-500">
                <NewsTime
                  newsTime={data.news_time || new Date().toISOString()}
                />
              </div>
            </div>
          </div>
          <NewsActions />
        </div>

        <div className="divider"></div>

        {/* Short Brief */}
        {data.news_short_brief && (
          <div
            className="py-5 leading-7 font-semibold"
            dangerouslySetInnerHTML={{ __html: data.news_short_brief }}
          />
        )}

        {/* News Image */}
        <div>
          <NewsImage
            news={{ ...data, title_img: data.title_img || "fallback.jpg" }}
            heightClass="h-full"
            widthClass="w-full"
            hoverEffect={false}
          />
          <span className="flex items-center justify-center pt-3 text-center">
            ছবি: সংগৃহীত
          </span>
        </div>

        <div className="divider my-0"></div>

        {/* Main News Content */}
        {cleanedHtml && (
          <div
            className="py-5 leading-7"
            dangerouslySetInnerHTML={{ __html: cleanedHtml }}
          />
        )}
      </div>

      {/* Recent News Sidebar */}
      <RecentNews catId={data.category_id || 0} />
    </div>
  );
}
