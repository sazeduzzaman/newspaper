import { CategoryListProps } from "@/lib/types/NewsCategoryData";
import Link from "next/link";

export default function CategoryList({ categoryItems }: CategoryListProps) {
  const firstTenItems = categoryItems.slice(0, 10);
  const remainingItems = categoryItems.slice(10);

  return (
    <>
      {/* Desktop Menu */}
      <ul className="items-stretch hidden lg:flex mx-auto">
        {firstTenItems.map((item) => (
          <li className="flex menu-border" key={item.id}>
            <Link
              href={`/category/${item.id}`}
              className="flex items-center main-menu-items px-10 -mb-1  dark:text-white text-white"
            >
              {item.name_bangla}
            </Link>
          </li>
        ))}

        {remainingItems.length > 0 && (
          <li className="flex items-center">
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center px-4 -mb-1  cursor-pointer dark:text-white text-white"
              >
                অন্যান্য +
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-10 w-52 p-2 shadow dark:bg-white bg-white"
              >
                {remainingItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/category/${item.id}`}
                      className="hover:bg-violet-100 "
                    >
                      {item.name_bangla}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
