"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

export default function Marquee() {
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

  return (
    <section className="mx-auto mt-1 flex h-[45px] w-[96rem] items-center gap-x-2 divide-x-[3px] divide-white rounded-lg bg-secondary py-2 text-white">
      <span className="px-4 font-semibold">ব্রেকিং নিউজঃ</span>

      <div className="embla w-[86rem] overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <p
              className="embla__slide min-w-0 flex-[0_0_auto] border-r-2 border-white px-2"
              key={index}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
