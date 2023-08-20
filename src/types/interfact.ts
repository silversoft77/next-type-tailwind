export interface IProduct {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
}

export interface IFilteredProducts {
  filtered_products: IProduct[];
  all_products: IProduct[];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
}

export interface IAllProducts {
    filtered_products: IProduct[];
    all_products: IProduct[];
    grid_view: boolean;
    sort: string;
    filters: {
      text: string;
      company: string;
      category: string;
      color: string;
      min_price: number;
      max_price: number;
      price: number;
      shipping: boolean;
    };
  }
