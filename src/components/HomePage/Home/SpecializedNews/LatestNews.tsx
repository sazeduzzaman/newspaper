import { latestNews } from "@/lib/apis/LatestNews";
import React from "react";
import LatestNewsItems from "./LatestNewsItems";

export default async function LatestNews() {
  const latestItems = await latestNews();
  return (
    <div>
      <LatestNewsItems latestItems={latestItems} />
    </div>
  );
}
