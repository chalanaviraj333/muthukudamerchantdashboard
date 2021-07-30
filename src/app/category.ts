import { Product } from "./product";

export interface Category {
    key: string;
    categoryName: string;
    categoryItems: Array<Product>;
}
