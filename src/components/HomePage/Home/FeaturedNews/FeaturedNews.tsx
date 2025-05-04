import React from "react";
import FeaturedNewsItems from "./FeaturedNewsItems";
import { featuredNews } from "@/lib/apis/FeaturedNews";

export default async function FeaturedNews() {
  const featuredItems = await featuredNews(); 
  return (
    <div className="container mx-auto px-4 py-6 pt-3">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <FeaturedNewsItems featuredItems={featuredItems}/>
        </div>
      </div>
    </div>
  );
}
