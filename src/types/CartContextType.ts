import type { Product } from "./Product";

export type CartContextType = {
  input: Record<string, number>;
  setInput: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  productList: Product[];
}