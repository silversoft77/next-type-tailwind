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

export interface IImages {
  url: string;
  width: number;
}
export interface ISingleProduct {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  images: IImages[];
  name: string;
  price: number;
  shipping: boolean;
  stars: number;
  stock: number;
  reviews: number;
}

export interface IFilteredProducts {
  all_products: IProduct[];
  filtered_products: IProduct[];
  sort: number;
  filter: {
    text: string;
    company: string;
    category: string;
  };
}

export interface IAllProducts {
  products: IProduct[];
  singleProduct: ISingleProduct;
  fetchSingleProduct: (url:string) => Promise<void>;
}

