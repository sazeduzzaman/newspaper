import { CategoryListProps } from "@/lib/types/NewsCategoryData";
import Link from "next/link";
import React from "react";

export default function FooterList({ categoryItems }: CategoryListProps) {
  // Divide The Data For Category
  const firstFour = categoryItems.slice(0, 5);
  const secondFour = categoryItems.slice(5, 10);
  const thirdFour = categoryItems.slice(10, 15);
  const lastFour = categoryItems.slice(15);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 justify-center items-start">
      <div>
        <ul>
          {firstFour.map((item) => (
            <li className="pb-3" key={item.id}>
              <Link
                href={`/category/${item.id}`}
                className="footer-links hover:underline"
              >
                {item.name_bangla}
              </Link>
            </li>
          ))}
          <li className="pb-3">
            <Link href="/info/contact" className="footer-links hover:underline">
              যোগাযোগ করুন
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {secondFour.map((item) => (
            <li className="pb-3" key={item.id}>
              <Link
                href={`/category/${item.id}`}
                className="footer-links hover:underline"
              >
                {item.name_bangla}
              </Link>
            </li>
          ))}
          <li className="pb-3">
            <Link href="/info/about" className="footer-links hover:underline">
              আমাদের সম্পর্কে
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {thirdFour.map((item) => (
            <li className="pb-3" key={item.id}>
              <Link
                href={`/category/${item.id}`}
                className="footer-links hover:underline"
              >
                {item.name_bangla}
              </Link>
            </li>
          ))}
          <li className="pb-3">
            <Link href="/info/terms" className="footer-links hover:underline">
              শর্তাবলী
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {lastFour.map((item) => (
            <li className="pb-3" key={item.id}>
              <Link
                href={`/category/${item.id}`}
                className="footer-links hover:underline"
              >
                {item.name_bangla}
              </Link>
            </li>
          ))}
          <li className="pb-3">
            <Link href="/info/policy" className="footer-links hover:underline">
              গোপনীয়তা নীতি
            </Link>
          </li>
        </ul>
      </div>
      <div>
        ডাউনলোড করুন।
        <div>
          <Link href={"#"}>
            <img
              className="w-[180px]"
              src="https://ajkal.us/img/settings/play.png"
              alt=""
            />
          </Link>
          <Link href={"#"}>
            <img
              className="w-[180px]"
              src="	https://ajkal.us/img/settings/applestore.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
