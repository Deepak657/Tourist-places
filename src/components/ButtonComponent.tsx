import React from "react";
import styled from "styled-components";
interface Ibutton {
  text: string;
  onclick: () => void;
}

const ButtonComponent = ({ text, onclick }: Ibutton) => {
  return <Button onClick={onclick}>{text}</Button>;
};

const Button = styled.button`
  color: rgb(27, 124, 228);
  background: transparent;
  border: 1px solid rgb(27, 124, 228);
  padding: 8px 16px;
  font-family: sans-serif;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: rgb(27, 124, 228);
    color: #fff;
  }
`;

export default ButtonComponent;
