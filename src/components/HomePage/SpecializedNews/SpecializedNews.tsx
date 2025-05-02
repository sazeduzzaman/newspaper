import React from "react";
import LatestNews from "./LatestNews";
import MostViewedNews from "./MostViewedNews";

const SpecializedNews = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          {/* First column content */}
          <MostViewedNews />
        </div>
        <div className="col-span-4">
          {/* Second column content */}
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default SpecializedNews;
