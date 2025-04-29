// types/types.ts

export interface Category {
  id: number;
  name?: string; // Add more fields as needed
}

// src/lib/types/CategoryTypes.ts
export interface CategoryPageParams {
  params: {
    id: string;
  };
}
