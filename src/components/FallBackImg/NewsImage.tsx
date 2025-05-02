"use client";

import React from "react";

interface NewsImageProps {
  news: any;
  heightClass?: string;
  widthClass?: string;
  hoverEffect?: boolean;
}

const NewsImage = ({
  news,
  heightClass = "h-auto",     // Responsive height
  widthClass = "w-full",      // Full width
  hoverEffect = false,
}: NewsImageProps) => {
  const baseClasses =
    "rounded-md object-cover transition duration-300 ease-in-out transform";
  const hoverClass = hoverEffect ? "hover:scale-105" : "";

  return (
    <div className={`relative ${widthClass} ${heightClass} overflow-hidden`}>
      <img
        className={`${baseClasses} w-full h-full ${hoverClass}`}
        src={`https://ajkal.us/img/news/${news?.title_img || "placeholder.jpg"}`}
        alt={news?.news_title || "News Image"}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Fplaceholder.jpg&w=640&q=75";
        }}
      />
    </div>
  );
};

export default NewsImage;
