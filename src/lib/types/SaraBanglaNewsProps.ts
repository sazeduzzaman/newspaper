export interface SaraBanglaNewsData {
  id: number;
  name: string; // Regular name of the news
  name_bangla: string; // Bengali title of the news
  category_id: number; // Category ID
  news_title: string; // This is used to show the title in Marquee
}

export interface SaraBanglaNewsProps {
  saraBanglaNewsData: any;
}
