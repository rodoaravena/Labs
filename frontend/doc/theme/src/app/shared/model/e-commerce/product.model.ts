
// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'Spykar' | 'Lee' | 'Hudson' | 'Denizen' | 'Levis' | 'Diesel';


export interface Products {
  id?: number;
  img?: any;
  name?: string;
  note?: string;
  discription?: string;
  discountPrice?: number;
  price?: number;
  status?: string;
  availability?: boolean;
  stock?: string;
  review?: string;
  category?: string;
  colors?: ProductColor[];
  size?: ProductSize[];
  tags?: ProductTags[];
  variants?: any[];
}
// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags
}