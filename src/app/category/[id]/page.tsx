// src/app/category/[id]/page.tsx

import CategoryData from "@/components/CategoryData/CategoryData";
import { Category } from "@/lib/types/CategoryTypes";

// Static Params fetching
export async function generateStaticParams() {
  const res = await fetch("https://backoffice.ajkal.us/news-category");
  const json = await res.json();

  const categories: Category[] = json.data; // Typing it as Category array

  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

// Component handling the page
export default async function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = params; // Get the id from params

  // ✅ Fetch the specific category news by id
  const response = await fetch(
    `https://backoffice.ajkal.us/category-news/${id}`,
    {
      cache: "no-store", // To prevent caching
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category news");
  }

  const categoryData = await response.json();
  const singleCategoryData = categoryData.data;

  return (
    <div className="dark:bg-white">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-6 justify-center items-center">
          <div className="col-span-12 xl:col-span-9">
            {/* Pass the data to the component */}
            <CategoryData data={singleCategoryData} />
          </div>
          <div className="col-span-12 xl:col-span-3">
            <p className="text-black">Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
