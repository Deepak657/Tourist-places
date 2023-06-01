import React from "react";
import styled from "styled-components";
interface Iparagraph {
  paragraph: string;
}
const ParagraphComponent = ({ paragraph }: Iparagraph) => {
  return <Content>{paragraph}</Content>;
};

export const Content = styled.p`
  text-align: justify;
  margin-bottom: 50px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: #00000077;
`;

export default ParagraphComponent;
