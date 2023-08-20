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
  all_products: IProduct[];
  filtered_products: IProduct[];
  sort: string;
  filter: {
    text: string;
    company: string;
    category: string;
  };
}

export interface IAllProducts {
  products: IProduct[];
}

