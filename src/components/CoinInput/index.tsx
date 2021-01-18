import React, { useContext, useState } from "react";
import { Container, Text } from "../../common/styles";
import { RootContext } from "../../context/RootContext";
import { EDenomination } from "../../types";
import { amountInDollars } from "../../util/priceInDollars";

import {
  AddCreditButton,
  Input,
  InputWrapper,
  RefundButton,
  Title,
} from "./styles";

export const CoinInput = () => {
  //local state
  const [currentEntry, setCurrentEntry] = useState("");
  const [changeReceived, setChangeReceived] = useState(false);
  //context
  const { credit, setCredit } = useContext(RootContext);

  //denominations
  const acceptedDenominations = [
    EDenomination.TenCents,
    EDenomination.TwentyCents,
    EDenomination.FiftyCents,
    EDenomination.OneDollar,
    EDenomination.TwoDollars,
  ];

  // handlers
  const addCreditHandler = () => {
    setChangeReceived(false);
    // check if credit is of correct denomination
    if (
      parseInt(currentEntry) !==
      acceptedDenominations.find((i) => i === parseInt(currentEntry))
    ) {
      // if incorrect denomination throw error
      // TODO add complete error display
      return alert(
        ` Must be ${acceptedDenominations.map((i: EDenomination) => `${i}`)}`
      );
    }
    // if all good then add credit
    setCredit(credit + parseInt(currentEntry));
  };

  const refundCreditHandler = () => {
    //refund credit
    setChangeReceived(true);
    setTimeout(() => setCredit(0), 3000);
  };

  return (
    <Container>
      <Container>
        {credit !== 0 && <Text>{`Credit: ${amountInDollars(credit)}`}</Text>}
      </Container>
      <InputWrapper>
        <Title>Enter Credit</Title>
        <Input
          title="Enter Amount"
          placeholder="Enter Amount"
          onChange={(e) => setCurrentEntry(e.target.value)}
          step="any"
        ></Input>
      </InputWrapper>
      <Container>
        <AddCreditButton onClick={addCreditHandler}>Add Credit</AddCreditButton>
        <RefundButton onClick={refundCreditHandler}>Refund</RefundButton>
      </Container>
      {changeReceived && (
        <Text> Received change: {amountInDollars(credit)}</Text>
      )}
    </Container>
  );
};
