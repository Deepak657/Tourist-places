import React from "react";
import styled from "styled-components";

interface Iprops {
  lable: string;
}

const Lable = ({ lable }: Iprops) => {
  return <LableStyle>{lable}</LableStyle>;
};

const LableStyle = styled.label`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
export default Lable;
