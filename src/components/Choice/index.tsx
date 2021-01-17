import React, { useContext } from "react";
import { Text } from "../../common/styles";
import { RootContext } from "../../context/RootContext";
import { IItem } from "../../types";
import { amountInDollars } from "../../util/priceInDollars";
import { ChoiceWrapper } from "./styles";

export const Choice = ({ data, canBuy }: { data: IItem; canBuy: boolean }) => {
  const { purchaseItem } = useContext(RootContext);
  const { title, priceInCents, stock, id } = data;
  return (
    <>
      <ChoiceWrapper onClick={() => purchaseItem(id)} canBuy={canBuy}>
        <Text>{title}</Text>
        <Text>{amountInDollars(priceInCents)}</Text>
        <Text>{`${stock} in stock`}</Text>
      </ChoiceWrapper>
    </>
  );
};
