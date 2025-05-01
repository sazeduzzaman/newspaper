import React from 'react';

interface NewsTimeProps {
  newsTime: string;
}

const NewsTime: React.FC<NewsTimeProps> = ({ newsTime }) => {
  const formatNewsTime = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // ✅ Use 12-hour format
      timeZone: 'Asia/Dhaka',
    };

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const formatted = new Intl.DateTimeFormat('bn-BD', options).format(date);
    return formatted.replace(/,/, '');
  };

  return <p>প্রকাশ: {formatNewsTime(newsTime)}</p>;
};

export default NewsTime;
