// types/types.ts

export interface Category {
  id: number;
  name?: string; // Add more fields as needed
}

export interface CategoryPageParams {
  params: {
    id: string;
  };
}
