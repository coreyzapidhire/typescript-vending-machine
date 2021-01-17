import { IItem } from "../types";

export const amountInDollars = (priceInCents: number) => {
  const value = (priceInCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "AUD",
  });
  return `${value}`;
};

export const canPurchase = (product: IItem, credit: number) =>
  credit >= product.priceInCents && product.stock > 0 ? true : false;
