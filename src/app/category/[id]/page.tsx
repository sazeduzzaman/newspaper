import CategoryData from "@/components/CategoryData/CategoryData";
import React from "react";

// --- Static Params for build ---
export async function generateStaticParams() {
  const res = await fetch("https://backoffice.ajkal.us/news-category");
  const data = await res.json();

  const categories = data.data; // Assume your categories are inside data.data

  if (!Array.isArray(categories)) {
    throw new Error("Expected 'data.data' to be an array");
  }

  return categories.map((category: { id: number }) => ({
    id: String(category.id),
  }));
}

// --- Actual Page ---
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // ✅ Fetch the specific category news by id
  const response = await fetch(
    `https://backoffice.ajkal.us/category-news/${id}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category news");
  }

  const categoryData = await response.json();
  const singleCategoryData = categoryData.data;

  return (
    <div className="dark:bg-white bg-white">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
          {/* Left side: Large Image */}
          <div className="col-span-12 xl:col-span-9">
            {/* ✅ Pass data to the component */}
            <CategoryData data={singleCategoryData} />
          </div>
          <div className="col-span-12 xl:col-span-3">
            <p className="text-black">Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
