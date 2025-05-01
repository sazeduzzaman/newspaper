import NewsDetails from "@/components/NewsDetails/NewsDetails";
import React from "react";

// Type definitions for params and the fetched news data
interface Params {
  categoryDetails: string;
  newDetails: string;
}

interface News {
  news_title: string;
  category_name: string;
  news_author: string;
  news_detail: string;
}

// This function will generate static paths for pre-rendering
export async function generateStaticParams(): Promise<
  { categoryDetails: string; newDetails: string }[]
> {
  const categoriesRes = await fetch(
    "https://backoffice.ajkal.us/news-category",
  );
  const categoriesData = await categoriesRes.json();

  const paths: { categoryDetails: string; newDetails: string }[] = [];

  if (Array.isArray(categoriesData?.data)) {
    for (const category of categoriesData.data) {
      const newsRes = await fetch(
        `https://backoffice.ajkal.us/category-news/${category.id}`,
      );
      const newsData = await newsRes.json();

      if (Array.isArray(newsData?.data)) {
        for (const news of newsData.data) {
          const sanitizedCategory = news.category_name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-") // Replace spaces with dashes
            .replace(/[^\w-]/g, ""); // Remove unsafe characters

          paths.push({
            categoryDetails: sanitizedCategory,
            newDetails: news.id.toString().trim(),
          });
        }
      }
    }
  }

  return paths;
}

export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ categoryDetails: string; newDetails: string }>;
}) {
  const { categoryDetails, newDetails } = await params;

  console.log(categoryDetails, newDetails);

  // Fetching the news details
  const res = await fetch(
    `https://backoffice.ajkal.us/news-detail/${newDetails}`,
  );

  if (!res.ok) {
    return <div>❌ News not found.</div>;
  }

  const json = await res.json();

  // Check if the fetched data is valid
  if (!json?.data) {
    return <div>❌ News not found.</div>;
  }

  // Renamed to avoid variable name conflict
  const newsDetails = json.data;

  return (
    <div>
      {/* Passing the newsDetails to the NewsDetails component */}
      <NewsDetails data={newsDetails} />
    </div>
  );
}
