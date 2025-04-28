import CategoryData from "@/components/CategoryData/CategoryData";
import { Category, CategoryPageParams } from "@/lib/types/CategoryTypes";

// Static Params fetching
export async function generateStaticParams() {
  const res = await fetch("https://backoffice.ajkal.us/news-category");
  const json = await res.json();

  const categories: Category[] = json.data; // Typing it as Category array

  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

// This function should be async to handle params properly
export default async function CategoryPage({ params }: CategoryPageParams) {
  const { id } = await params; 

  // ✅ Fetch the specific category news by id
  const response = await fetch(
    `https://backoffice.ajkal.us/category-news/${id}`,
    {
      cache: "no-store", // So it doesn't cache old data
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category news");
  }

  const categoryData = await response.json();
  const singleCategoryData= categoryData.data

  return (
    <div className="dark:bg-white">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-6 justify-center items-center">
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
}
