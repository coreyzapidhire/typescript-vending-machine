import styled from "styled-components";

interface IChoiceWrapperProps {
  canBuy: boolean;
}

export const ChoiceWrapper = styled.div<IChoiceWrapperProps>`
  background-color: tomato;
  margin: 16px;
  min-width: 200px;
  text-align: center;
  opacity: ${({ canBuy }) => (canBuy ? "100%" : "25%")};
  cursor: ${({ canBuy }) => (canBuy ? "pointer" : "default")};
  pointer-events: ${({ canBuy }) => (canBuy ? "auto" : "none")};
`;
