import React from "react";
import styled from "styled-components";
import Lable from "./Lable";

interface Iprops {
  background: string;
  placeholder: string;
  lable: string;
}

const TextArea = ({ background, placeholder, lable }: Iprops) => {
  return (
    <>
      {lable && <Lable lable={lable} />}
      <TextAreaStyle
        background={background}
        cols={30}
        rows={10}
        placeholder={placeholder}
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
