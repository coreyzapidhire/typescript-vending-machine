import React, { useContext } from "react";
import { RootContext } from "../../context/RootContext";
import { IItem } from "../../types";
import { canPurchase } from "../../util/priceInDollars";
import { Choice } from "../Choice";
import { ProductDisplayContainer } from "./styles";

export const ProductDisplay = () => {
  const { products, credit } = useContext(RootContext);
  return (
    <ProductDisplayContainer>
      {products?.map((item: IItem, index) => {
        return (
          <Choice canBuy={canPurchase(item, credit)} key={index} data={item} />
        );
      })}
    </ProductDisplayContainer>
  );
};
