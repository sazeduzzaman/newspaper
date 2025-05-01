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
  // const nonFeatureItems = nonFeatured.slice(4);
  // console.log(nonFeatureItems, "nonFeatureItems")
  return (
    <div className="my-10">
      <div className="container mx-auto text-white sm:px-0">
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="">
            {featureItems.map((item: any) => (
              <Link href={`/details/${item.category_name.toLowerCase()}/${item.id}`} key={item.id}>
                <div className="card relative w-full overflow-hidden bg-base-100 shadow-sm">
                  <figure className="relative">
                    <img
                      className="h-[515px] cursor-grab object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop
                        target.src = "https://ajkal.us/img/news/default.jpg"; // your fallback image
                      }}
                    />
                  </figure>
                  <div className="card-body text-black">
                    <h2 className="">{item.news_title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {nonFeatureSpecificItems.map((items: any) => (
              <Link href={`/details/${items.category_name.toLowerCase()}/${items.id}`} key={items.id}>
                <div className="text-black">
                  <div
                    className="card w-full bg-base-100 shadow-sm"
                    key={items.id}
                  >
                    <figure>
                      <img
                        className="h-50 cursor-grab object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        src={`https://ajkal.us/img/news/${items.title_img}`}
                        alt={items.news_title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // prevent infinite loop
                          target.src = "https://ajkal.us/img/news/default.jpg"; // your fallback image
                        }}
                      />
                    </figure>
                    <div className="card-body h-20">
                      <h2 className="text-black">{items.news_title}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
