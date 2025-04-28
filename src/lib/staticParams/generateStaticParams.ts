import { Category } from "@/lib/types/CategoryTypes";

// Static Params fetching
export async function generateStaticParams() {
  const res = await fetch("https://backoffice.ajkal.us/news-category");
  const json = await res.json();

  const categories: Category[] = json.data; // Typing it as Category array

  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}
