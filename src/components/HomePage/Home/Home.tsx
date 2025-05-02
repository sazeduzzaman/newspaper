import React from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import FeaturedNews from "../FeaturedNews/FeaturedNews";
import SpecializedNews from "../SpecializedNews/SpecializedNews";

const Home = () => {
  return (
    <div>
      <BreakingNews />
      <FeaturedNews />
      <SpecializedNews/>
    </div>
  );
};

export default Home;
