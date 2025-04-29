import React from "react";

// --- Static Params for build ---
export async function generateStaticParams() {
  const res = await fetch("https://backoffice.ajkal.us/news-category");
  const data = await res.json();

  const categories = data.data; // Assume your categories are inside data.data

  if (!Array.isArray(categories)) {
    throw new Error("Expected 'data.data' to be an array");
  }

  return categories.map((category: { id: number }) => ({
    id: String(category.id),
  }));
}

// --- Actual Page ---
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Category ID: {id}</h1>
      <p>This is the page for category {id}</p>
    </div>
  );
};

export default Page;
