import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/HomePage/Header/Header";
import "@styles/globals.css";

export const metadata = {
  title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
  openGraph: {
    type: "website",
    url: "https://www.ajkal.us",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: ["https://ajkal.us/img/settings/placeholder.jpg"],
  },
  canonicalUrl: "https://www.ajkal.us",
};

const Adorsholipi = localFont({
  src: "./fonts/AdorshoLipi/AdorshoLipi.woff2",
  variable: "--adorsho-lipi-font",
});

const Popins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--popins-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={cn("antialiased", Adorsholipi.className, Popins.variable)}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
