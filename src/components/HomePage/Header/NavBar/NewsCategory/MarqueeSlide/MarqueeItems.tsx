"use client";

import { BreakingNewsMarqueProps } from "@/lib/types/BreakingNewsMarqueTypes";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function MarqueeItems({
  breakingItems,
}: BreakingNewsMarqueProps) {
  console.log(breakingItems, "breakingItems");
  const [emblaRef] = useEmblaCarousel(
    { loop: true, containScroll: "keepSnaps" },
    [
      AutoScroll({
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        speed: 0.85,
        startDelay: 50,
      }),
    ],
  );
  const extendedBreakingItems = [
    ...breakingItems,
    ...breakingItems,
    ...breakingItems,
  ];
  return (
    <section className="mx-auto mt-1 flex h-[45px] w-[96rem] items-center gap-x-2 divide-x-[3px] divide-white rounded-lg bg-secondary py-2 text-white">
      <span className="px-4 font-semibold">ব্রেকিং নিউজঃ</span>

      <div className="embla w-[86rem] overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {extendedBreakingItems.map((item, index) => (
            <p
              className="embla__slide min-w-0 flex-[0_0_auto] border-r-2 border-white px-2"
              key={index}
            >
              <Link href={`/category/${item.category_id}`}>
                {item.news_title}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
