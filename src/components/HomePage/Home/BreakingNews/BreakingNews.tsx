import { breakingNews } from "@/lib/apis/BreakingNews";
import React from "react";
import BreakingNewsItems from "./BreakingNewsItems";

export default async function BreakingNews() {
  const breakingItems = await breakingNews(); // Fetch data from the server
  return (
    <div>
      <BreakingNewsItems breakingItems={breakingItems} />
    </div>
  );
}
