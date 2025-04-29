"use client";
import Link from "next/link";

interface CategoryDataProps {
  data: any; // later you can create a better type
}

export default function CategoryData({ data }: CategoryDataProps) {
  const featured = data.filter((item: any) => item.is_featured === 1);
  const nonFeatured = data.filter((item: any) => item.is_featured !== 1);

  const featureItems = featured.slice(0, 1);
  const nonFeatureSpecificItems = nonFeatured.slice(0, 4);
  const nonFeatureItems = nonFeatured.slice(4);
  return (
    <div className="my-10">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center items-center">
          <div className="">
            {featureItems.map((item: any) => (
              <Link href={`/news-detail/${item?.id}`} key={item.id}>
                <div className="card bg-base-100 w-full shadow-sm relative overflow-hidden">
                  <figure className="relative">
                    <img
                      className="h-[515px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-grab"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop
                        target.src = "https://ajkal.us/img/news/default.jpg"; // your fallback image
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="">{item.news_title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center items-center">
            {nonFeatureSpecificItems.map((items: any) => (
              <div className="text-black" key={items.id}>
                <div
                  className="card bg-base-100 w-full shadow-sm"
                  key={items.id}
                >
                  <figure>
                    <img
                      className="h-50 object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-grab"
                      src={`https://ajkal.us/img/news/${items.title_img}`}
                      alt={items.news_title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop
                        target.src = "https://ajkal.us/img/news/default.jpg"; // your fallback image
                      }}
                    />
                  </figure>
                  <div className="card-body h-20 overflow-y-auto">
                    <h2 className="text-white">{items.news_title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
