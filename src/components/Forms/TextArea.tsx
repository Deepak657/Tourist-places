import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Lable from "./Lable";

interface Iprops extends InputHTMLAttributes<HTMLTextAreaElement> {
  background: string;
  lable: string;
}

const TextArea = ({ background, lable, ...restProps }: Iprops) => {
  return (
    <>
      {lable && <Lable lable={lable} />}
      <TextAreaStyle
        background={background}
        cols={30}
        rows={10}
        {...restProps}
      ></TextAreaStyle>
    </>
  );
};

const TextAreaStyle = styled.textarea<{ background: string }>`
  padding: 14px 12px;
  width: 100%;
  border-radius: 6px;
  background: ${({ background }) => background};
  outline: none;
  border: none;
`;

export default TextArea;
