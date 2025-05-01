import React from "react";

interface CategoryDataProps {
  data: any; // later you can create a better type
}

export default function NewsDetails({ data }: CategoryDataProps) {
  console.log(data, "from news details");
  return <div>{data.news_title}</div>;
}
