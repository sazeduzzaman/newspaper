// app/types.ts

export interface NewsCategoryData {
  name: string;
  id: number;
  name_bangla: string;
}

export interface CategoryListProps {
  categoryItems: NewsCategoryData[];
  isMobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export interface NewsCategoryProps {
  categoryItems: NewsCategoryData[];
  isMobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}
