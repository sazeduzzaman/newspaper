import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { saraBanglaNews } from "@/lib/apis/SaraBanglaNews";
import React from "react";
import SaraBanglaNewsItems from "./SaraBanglaNewsItems";

export default async function SaraBanglaNews() {
  const SaraBanglaNewsData = await saraBanglaNews();
  return (
    <div>
      <SectionHeader title="সারা বাংলা" />
      <SaraBanglaNewsItems saraBanglaNewsData={SaraBanglaNewsData}/>
    </div>
  );
}
