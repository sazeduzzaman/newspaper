import MarqueeItems from "./MarqueeItems";
import { breakingNews } from "@/lib/apis/BreakingNews";

export default async function ParentComponent() {
  const breakingItems = await breakingNews(); // Fetch data from the server

  return (
    <div>
      <MarqueeItems breakingItems={breakingItems} />
    </div>
  );
}
