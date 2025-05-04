import React from "react";
import SaraBanglaNews from "./SaraBanglaNews";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import KhelarNews from "./KhelarNews";

const NewsWithSidebar = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <SaraBanglaNews />
          <KhelarNews />
        </div>
        <div className="col-span-3">
          <SectionHeader title="বিজ্ঞাপন কর্নার।" />
        </div>
      </div>
    </div>
  );
};

export default NewsWithSidebar;
