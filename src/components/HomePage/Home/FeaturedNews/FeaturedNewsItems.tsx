"use client";
import NewsImage from "@/components/FallBackImg/NewsImage";
import { FeaturedNewsProps } from "@/lib/types/FeaturedNewsProps";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function FeaturedNewsItems({
  featuredItems,
}: FeaturedNewsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [
      AutoScroll({
        speed: 1.5,
        startDelay: 1000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    setTotalSlides(emblaApi.scrollSnapList().length);
    update();
  }, [emblaApi]);

  return (
    <div className="w-full">
      {/* Carousel */}
      <div ref={emblaRef} className="cursor-move overflow-hidden">
        <div className="flex gap-4">
          {featuredItems.map((item: any) => (
            <div key={item.id} className="w-[20%] flex-shrink-0">
              <Link
                href={`/details/${item.category_name.toLowerCase()}/${item.id}`}
              >
                <div className="card bg-main shadow-sm">
                  <figure className="relative overflow-hidden">
                    <NewsImage
                      news={{
                        ...item,
                        title_img: item.title_img || "fallback.jpg",
                      }}
                      heightClass="h-[300px]"
                      widthClass="w-full"
                      hoverEffect={true}
                    />
                  </figure>
                  <div className="card-body flex h-25 items-center justify-center rounded-lg text-white">
                    <h2 className="text-1xl">{item.news_title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-5 bg-main" : "w-3 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
