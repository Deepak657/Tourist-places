import React from "react";
import styled from "styled-components";

interface Iprops {
  lable: string;
  fontSize: string;
  display: string;
}

const Lable = ({ lable, fontSize, display }: Iprops) => {
  return (
    <LableStyle fontSize={fontSize} display={display}>
      {lable}
    </LableStyle>
  );
};

const LableStyle = styled.label<{ fontSize: string; display: string }>`
  font-family: sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  display: ${({ display }) => display};
`;
export default Lable;
