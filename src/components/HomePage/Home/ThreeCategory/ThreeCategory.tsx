import React from "react";
import BangladeshCtaNews from "./BangladeshCtaNews/BangladeshCtaNews";
import JuktorastroCtaNews from "./JuktorastroCtaNews/JuktorastroCtaNews";
import NewYorkCtaNews from "./NewYorkCtaNews/NewYorkCtaNews";
import SaraBissoCtaNews from "./SaraBissoCtaNews/SaraBissoCtaNews";
import { saraBisshoNews } from "@/lib/apis/SaraBisshoNews";
import { bangladeshNews } from "@/lib/apis/BangladeshNews";
import { juktorastroNews } from "@/lib/apis/JuktorastroNews";
import { NewYorkNews } from "@/lib/apis/NewYorkNews";

export default async function ThreeCategory() {
  const bangladeshNewsData = await bangladeshNews();
  const juktorastroNewsData = await juktorastroNews();
  const NewYorkNewsData = await NewYorkNews();
  const saraBisshoNewsData = await saraBisshoNews();
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <BangladeshCtaNews bangladeshNewsData={bangladeshNewsData} />
        </div>
        <div className="col-span-3">
          <JuktorastroCtaNews juktorastroNewsData={juktorastroNewsData} />
        </div>
        <div className="col-span-3">
          <NewYorkCtaNews newYorkNewsData={NewYorkNewsData} />
        </div>
        <div className="col-span-3">
          <SaraBissoCtaNews saraBissoCtaNewsData={saraBisshoNewsData} />
        </div>
      </div>
    </div>
  );
}
