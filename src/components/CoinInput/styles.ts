import styled from "styled-components";

export const AddCreditButton = styled.button`
  background-color: #4caf50;
  margin: 16px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;

  &:active {
    background-color: #4caf20;
  }
`;

export const InputWrapper = styled.div`
  display: "flex";
  flexdirection: "column";
`;

export const Input = styled.input`
  width: 20%;
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 32px;
`;

export const Title = styled.p``;
