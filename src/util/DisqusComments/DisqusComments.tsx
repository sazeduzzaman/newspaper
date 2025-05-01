"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const DiscussionEmbed = dynamic(
  () => import("disqus-react").then((mod) => mod.DiscussionEmbed),
  { ssr: false },
);

interface Post {
  id: number;
  news_title: string;
  news_detail: string;
  news_author: string;
  news_time: string;
  thumbnail_img: string;
}

interface SingleNewsDetails {
  id: string;
  news_title: string;
}

const DisqusComments: React.FC<{ post: Post }> = ({ post }) => {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      console.log("Page URL:", url); // ✅ See what's actually being set
      setPageUrl(url);
    }
  }, []);

  // ✅ Add here: map Post to SingleNewsDetails
  const singleNewsDetails: SingleNewsDetails = {
    id: post.id.toString(),
    news_title: post.news_title,
  };

  const disqusConfig = {
    url: pageUrl,
    identifier: singleNewsDetails.id,
    title: singleNewsDetails.news_title,
  };

  return (
    <div className="disqus-container">
      {pageUrl && (
        <DiscussionEmbed shortname="ajkal-us" config={disqusConfig} />
      )}
    </div>
  );
};

export default DisqusComments;
