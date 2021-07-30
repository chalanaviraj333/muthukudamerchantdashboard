export interface Product {
    key: string;
    productnumber: number;
    productname: string;
    imageUrl: string;
    productWeight: string;
    productmaxsellingprice: number;
    productoursellingprice?: number;
    quantityinstock: number;
    itemMaxQuantity: number;
    itemMinQuantity: number;
}
