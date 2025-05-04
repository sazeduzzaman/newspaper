import React from "react";
import NewsImage from "@/components/FallBackImg/NewsImage";
import HomeNewsTime from "@/components/Time/HomeNewsTime";
import { SaraBanglaNewsProps } from "@/lib/types/SaraBanglaNewsProps";
import Link from "next/link";

const SaraBanglaNewsItems = ({ saraBanglaNewsData }: SaraBanglaNewsProps) => {
  console.log(saraBanglaNewsData);
  const featured = saraBanglaNewsData.filter(
    (item: any) => item.is_featured === 1,
  );
  const nonFeatured = saraBanglaNewsData.filter(
    (item: any) => item.is_featured !== 1,
  );

  const featureItems = featured.slice(0, 1);
  const nonFeaturedItems = nonFeatured.slice(0, 4);

  return (
    <div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            {featureItems.map((item: any) => (
              <div key={item.id}>
                <Link
                  href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
                  key={item.id}
                >
                  <div className="card bg-main shadow-sm">
                    <figure className="relative overflow-hidden">
                      <NewsImage
                        news={{
                          ...item,
                          title_img: item.title_img || "fallback.jpg",
                        }}
                        heightClass="h-[535px]"
                        widthClass="w-full"
                        hoverEffect={true}
                      />
                    </figure>
                    <div className="card-body rounded-lg text-white">
                      <h2 className="card-title text-2xl">{item.news_title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-span-6">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-6">
                {nonFeaturedItems.map((item: any) => (
                  <div className="col-span-6" key={item.id}>
                    <Link
                      href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
                      key={item.id}
                    >
                      <div className="card bg-white text-main shadow-sm">
                        <figure className="relative overflow-hidden">
                          <NewsImage
                            news={{
                              ...item,
                              title_img: item.title_img || "fallback.jpg",
                            }}
                            heightClass="h-40"
                            widthClass="w-full"
                            hoverEffect={true}
                          />
                        </figure>
                        <div className="card-body h-34 rounded-lg p-4 text-main">
                          <h2 className="card-title text-base leading-6 font-normal">
                            {item.news_title}
                          </h2>
                          <div className="flex items-center justify-between pt-2">
                            <div>
                              <span className="text-red">
                                {item.category_name_bangla}
                              </span>
                            </div>
                            <div>
                              <HomeNewsTime
                                newsTime={
                                  item.news_time || new Date().toISOString()
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaraBanglaNewsItems;
