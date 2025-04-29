// Fetch categories and generate static paths with dynamic parameters
export async function generateStaticParams() {
  // Fetch the list of available categories dynamically
  const categoryRes = await fetch("https://backoffice.ajkal.us/news-category");

  if (!categoryRes.ok) {
    console.error("Failed to fetch categories", categoryRes.statusText);
    return [];
  }

  const categoryData = await categoryRes.json();
  if (!categoryData || !categoryData.data) {
    console.error("Invalid category data structure:", categoryData);
    return [];
  }

  // Fetch the list of news items dynamically
  const newsRes = await fetch("https://backoffice.ajkal.us/news-list");

  if (!newsRes.ok) {
    console.error("Failed to fetch news list", newsRes.statusText);
    return [];
  }

  const newsData = await newsRes.json();
  if (!newsData || !newsData.data) {
    console.error("Invalid news data structure:", newsData);
    return [];
  }

  // Generate dynamic paths for each category and news item
  return categoryData.data.flatMap((category: { id: string; name_bangla: string }) =>
    newsData.data.map((newsItem: { id: string }) => ({
      params: {
        categoryDetails: category.name_bangla, // The category name in Bangla
        newDetails: newsItem.id, // The news item ID
      },
    }))
  );
}

// Page component to fetch and display news item based on dynamic params
const Page = async ({ params }: { params: { categoryDetails: string; newDetails: string } }) => {
  const { newDetails } = params;

  // Fetch the news item details for the given ID
  const res = await fetch(`https://backoffice.ajkal.us/news-detail/${newDetails}`, {
    next: { revalidate: 60 }, // Configure revalidation for dynamic content
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch news detail for ID: ${newDetails}`);
  }

  const data = await res.json();
  const newsItem = data.data;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
    </div>
  );
};

export default Page;
