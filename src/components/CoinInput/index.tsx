import React, { useContext, useState } from "react";
import { Container, Text } from "../../common/styles";
import { RootContext } from "../../context/RootContext";
import { EDenomination } from "../../types";
import { amountInDollars } from "../../util/priceInDollars";

import { AddCreditButton, Input, InputWrapper, Title } from "./styles";

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

  //handlers
  const addCreditHandler = () => {
    if (
      setCredit === undefined ||
      setCredit === null ||
      credit === undefined ||
      credit === null
    )
      return null;

    // check if credit is of correct denomination
    if (
      parseInt(currentEntry) !==
      acceptedDenominations.find((i) => i === parseInt(currentEntry))
    ) {
      //if incorrect denomination throw error
      return alert(
        ` Must be ${acceptedDenominations.map((i: EDenomination) => `${i}`)}`
      );
    }

    //if all good then add credit
    setCredit(credit + parseInt(currentEntry));
  };

  return (
    <Container>
      <Container>
        {credit !== 0 && (
          <Text>{`${changeReceived ? "Change" : "Credit"}: ${amountInDollars(
            credit
          )}`}</Text>
        )}
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
      <AddCreditButton onClick={addCreditHandler}>Add Credit</AddCreditButton>
    </Container>
  );
};
