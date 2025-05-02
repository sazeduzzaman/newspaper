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

// ✅ generateStaticParams must only use plain fetch
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
      // ❌ REMOVE revalidate here
      const newsRes = await fetch(
        `https://backoffice.ajkal.us/category-news/${category.id}`,
      );

      if (!newsRes.ok) continue;

      const newsData = await newsRes.json();

      if (Array.isArray(newsData?.data)) {
        for (const news of newsData.data) {
          const sanitizedCategory = news.category_name
            .toLowerCase()
            .trim()
            .replace(/-/g, "")
            .replace(/\s+/g, "")
            .replace(/[^\w-]/g, "");

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

  // ✅ It's fine to use revalidate here
  const res = await fetch(
    `https://backoffice.ajkal.us/news-detail/${newDetails}`,
    {
      next: { revalidate: 3600 },
    },
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
    <div className="bg-white dark:bg-white">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
          {/* Left side: Large Image */}
          <div className="col-span-12 xl:col-span-9">
            {/* ✅ Pass data to the component */}
            <NewsDetails data={newsDetails} />
          </div>
          <div className="col-span-12 xl:col-span-3">
            <p className="text-black">Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
