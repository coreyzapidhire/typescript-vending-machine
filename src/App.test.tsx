import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from 'react-test-renderer';
import { getProducts } from "./api/api";
import { amountInDollars } from "./util/priceInDollars";
import { CoinInput } from "./components/CoinInput";

test("test that data is returned from api", () => {
  const connectToServer = getProducts();

  expect(connectToServer).not.toBe(null);
});

test("correct credit is displayed", () => {
 expect(amountInDollars(200)).toBe('A$2.00')
 expect(amountInDollars(10)).toBe('A$0.10')

});

it('screen renders correctly', () => {
  const tree = renderer
    .create( <CoinInput />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
