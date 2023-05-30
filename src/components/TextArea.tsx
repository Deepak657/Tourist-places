import React from "react";
import styled from "styled-components";

interface Iprops {
  background: string;
  placeholder: string;
}

const TextArea = ({ background, placeholder }: Iprops) => {
  return (
    <div>
      <TextAreaStyle
        background={background}
        cols={30}
        rows={10}
        placeholder={placeholder}
      ></TextAreaStyle>
    </div>
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
