// Define the NewsCategoryData interface for the fetched data
interface CategoryNewsData {
  id: number;
  name: string; // Regular name of the news
  name_bangla: string; // Bengali title of the news
  category_id: number; // Category ID
  news_title: string; // This is used to show the title in Marquee
}

export const bangladeshNews = async (): Promise<CategoryNewsData[]> => {
  try {
    const response = await fetch("https://backoffice.ajkal.us/category-news/1");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
