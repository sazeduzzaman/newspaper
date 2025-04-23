import Link from "next/link";
import React from "react";

const page = () => {
  const featureItems = [
    {
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      link: "#",
    },
    {
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      link: "#",
    },
    {
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      link: "#",
    },
    {
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      link: "#",
    }
  ];

  return (
    <section className="p-6 sm:p-0 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto  sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-6 justify-center items-center">
          {/* Left side: Large Image */}
          <div className="col-span-12 xl:col-span-8">
            <img
              src="https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fnews%2F17450201764407898.png&w=1920&q=75"
              alt="Random"
              className="object-cover w-full h-[580px] rounded-md dark:bg-gray-500"
            />
          </div>

          {/* Right side: Cards */}
          <div className="col-span-12 xl:col-span-4 space-y-4">
            {featureItems.map((card, index) => (
              <Link
                href={card.link}
                key={index}
                className="flex flex-col sm:flex-row shadow-sm w-100 hover:shadow-md transition-shadow duration-300 bg-gray-100 rounded-md overflow-hidden"
              >
                <div className="sm:w-1/3 bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    src={card.img}
                    alt="Album"
                  />
                </div>
                <div className="sm:w-2/3 p-4 bg-gray-100">
                  <h2 className="card-title text-lg font-semibold">
                    {card.title}
                  </h2>
                  <p className="text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
