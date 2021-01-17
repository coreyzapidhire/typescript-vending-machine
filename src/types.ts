export interface IItem {
  id: number;
  title: string;
  priceInCents: number;
  logoURL: string;
  stock: number;
  code: string
}

export enum EDenomination {
  
    TenCents = 10,
    TwentyCents = 20,
    FiftyCents = 50,
    OneDollar = 100,
    TwoDollars = 200,
  }
  