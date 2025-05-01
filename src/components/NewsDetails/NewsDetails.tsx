import React from "react";
import NewsTime from "../Time/NewsTime";
import RecentNews from "./RecentNews";
import Link from "next/link";
import NewsImage from "../FallBackImg/NewsImage";
import NewsActions from "../NewsActions/NewsActions";
import DisqusComments from "@/util/DisqusComments/DisqusComments";

// Define the type for the news data prop
interface NewsDetails {
  data: {
    news_title: string;
    news_author: string;
    news_detail: string;
    category_name_bangla: string;
    news_time: string;
    title_img: string;
    news_short_brief: string;
    category_id: number;
  };
}

export default function NewsDetails({ data }: NewsDetails) {
  const removeImgTags = (html: string) => {
    return html.replace(/<img[^>]*>/g, ""); // Removes all <img> tags
  };

  const cleanedHtml = removeImgTags(data.news_detail);

  return (
    <div>
      <div>
        <div className="pt-5">
          <h2 className="main-text inline-block border-b-2 text-2xl font-bold">
            <Link href={`/category/${data.category_id}`}>
              {data.category_name_bangla}
            </Link>
          </h2>
          <h1 className="py-8 text-4xl">{data.news_title}</h1>
        </div>
        {/* Author */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-15 w-15 rounded-full object-cover"
              src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Fplaceholder.jpg&w=640&q=75"
              alt="{data.news_title}"
            />
            <div className="ps-3">
              <p className="main-text font-semibold">{data.news_author}</p>
              <div className="text-gray-500">
                <NewsTime newsTime={data.news_time} />
              </div>
            </div>
          </div>
          <NewsActions />
        </div>
        <div className="divider"></div>
        <div
          className="py-5 leading-7 font-semibold"
          dangerouslySetInnerHTML={{ __html: data.news_short_brief }}
        />
        <div>
          {/* News Image */}
          <div>
            {/* <img
              className="w-full rounded-md object-cover"
              src={`https://ajkal.us/img/news/${data.title_img}`}
              alt={data.news_title}
            /> */}
            <NewsImage news={data} heightClass="h-full" hoverEffect={false} />
            <span className="flex items-center justify-center pt-3 text-center">
              ছবি: সংগৃহীত
            </span>
          </div>
          <div className="divider my-0"></div>
          <div
            className="py-5 leading-7"
            dangerouslySetInnerHTML={{ __html: cleanedHtml }}
          />
        </div>
      </div>
      {/* Share News */}
      <div className="mb-5">
        <DisqusComments />
      </div>
      {/* Share News End */}
      <RecentNews catId={data.category_id} />
    </div>
  );
}
