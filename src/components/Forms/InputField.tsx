import React from "react";
import styled from "styled-components";
import Lable from "./Lable";

interface Iprops {
  placeHolder: string;
  background: string;
  lable: string;
}

const InputField = ({ placeHolder, background, lable }: Iprops) => {
  return (
    <>
      {lable && <Lable lable={lable} />}
      <Input type="text" placeholder={placeHolder} background={background} />
    </>
  );
};

const Input = styled.input<{ background: string }>`
  padding: 14px 12px;
  width: 100%;
  border-radius: 6px;
  background: ${({ background }) => background};
  outline: none;
  border: none;
`;

export default InputField;
