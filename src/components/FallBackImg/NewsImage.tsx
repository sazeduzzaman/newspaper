'use client';

import React from "react";

interface NewsImage {
  news: any;
  heightClass: string;
  hoverEffect?: boolean; // Optional prop
}

const NewsImage = ({ news, heightClass, hoverEffect = false }: NewsImage) => {
  const baseClasses = "w-full rounded-md object-cover transition duration-300 ease-in-out transform";
  const hoverClass = hoverEffect ? "hover:scale-105" : "";

  return (
    <img
      className={`${baseClasses} ${heightClass} ${hoverClass}`}
      src={`https://ajkal.us/img/news/${news.title_img}`}
      alt={news.news_title}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src =
          "https://ajkal.us/_next/image?url=https%3A%2F%2Fajkal.us%2Fimg%2Fsettings%2Fplaceholder.jpg&w=640&q=75";
      }}
    />
  );
};

export default NewsImage;
