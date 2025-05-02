import React from "react";

interface NewsTimeProps {
  newsTime: string;
}

const HomeNewsTime: React.FC<NewsTimeProps> = ({ newsTime }) => {
  const formatNewsTime = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);

    const isToday = date.toDateString() === now.toDateString();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
      if (diffMins < 60) return `${diffMins} মিনিট আগে`;
      return `${diffHours} ঘন্টা আগে`;
    }

    if (isYesterday) return "গতকাল";

    // Older than yesterday → full date in Bangla
    return date.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Dhaka",
    });
  };

  return <p>{formatNewsTime(newsTime)}</p>;
};

export default HomeNewsTime;
