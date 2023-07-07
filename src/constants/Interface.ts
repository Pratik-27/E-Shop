export interface Product {
    id: string;
    name: string;
    price: number;
    img: string
    colour: string;
    count?: number
  }



export interface CatalogReducer {
    catalogList: Product[]
    cartList: Product[]
    catalog: any
}