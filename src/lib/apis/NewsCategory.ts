"use server";

// Define the NewsCategoryData interface for the fetched data
interface NewsCategoryData {
  name: string;
  id: number;
}

export const newsCategory = async (): Promise<NewsCategoryData[]> => {
  try {
    const response = await fetch("https://backoffice.ajkal.us/news-category");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
