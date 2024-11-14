export interface ChildFooter {
  point: string;
}

export interface FooterMenu {
  parent: string;
  child: ChildFooter[];
}

export interface Product {
  images: string;
  name: string;
  price: number;
  discount: number;
}
