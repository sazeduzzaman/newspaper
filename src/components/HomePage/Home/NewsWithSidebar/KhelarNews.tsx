import { khelarNews } from "@/lib/apis/KhelarNews";
import React from "react";
import KhelarNewsItems from "./KhelarNewsItems";

export default async function KhelarNews() {
  const khelarNewsData = await khelarNews();
  return (
    <div>
      <KhelarNewsItems khelarNewsData={khelarNewsData} />
    </div>
  );
}
