import React from "react";
import BreakingNews from "./BreakingNews/BreakingNews";
import FeaturedNews from "./FeaturedNews/FeaturedNews";
import SpecializedNews from "./SpecializedNews/SpecializedNews";
import ThreeCategory from "./ThreeCategory/ThreeCategory";
import NewsWithSidebar from "./NewsWithSidebar/NewsWithSidebar";

const Home = () => {
  return (
    <div>
      <BreakingNews />
      <FeaturedNews />
      <SpecializedNews />
      <ThreeCategory />
      <NewsWithSidebar />
    </div>
  );
};

export default Home;
