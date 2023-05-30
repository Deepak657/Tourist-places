import React from "react";
import styled from "styled-components";

interface Iprops {
  placeHolder: string;
  background: string;
  display: string;
}

const InputField = ({ placeHolder, background, display }: Iprops) => {
  return (
    <Input
      type="text"
      placeholder={placeHolder}
      background={background}
      display={display}
    />
  );
};

const Input = styled.input<{ background: string; display: string }>`
  padding: 14px 12px;
  width: 100%;
  border-radius: 6px;
  background: ${({ background }) => background};
  outline: none;
  border: none;
  display: ${({ display }) => display};
`;

export default InputField;
