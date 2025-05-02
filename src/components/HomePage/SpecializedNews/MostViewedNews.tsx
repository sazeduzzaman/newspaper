import { mostViewedNews } from "@/lib/apis/MostViewedNews";
import React from "react";
import MostViewedNewsItems from "./MostViewedNewsItems";

export default async function MostViewedNews() {
  const mostViewedItems = await mostViewedNews();
  return (
    <div>
      <MostViewedNewsItems mostViewedItems={mostViewedItems} />
    </div>
  );
}
