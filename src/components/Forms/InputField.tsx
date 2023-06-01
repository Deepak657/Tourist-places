import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Lable from "./Lable";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  background: string;
  lable: string;
}

const InputField = ({ background, lable, ...restProps }: Iprops) => {
  return (
    <>
      {lable && <Lable lable={lable} />}
      <Input type="text" background={background} {...restProps} />
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
