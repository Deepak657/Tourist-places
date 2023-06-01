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

export const ModifiedContentBlog = styled(Content)`
  width: 400px;
  text-align: center;
`;

export const ModifiedAboutContent = styled(Content)`
  line-height: 1.6;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const ModifiedAboutContentList = styled(Content)`
  line-height: 1.3;
  margin-bottom: 0;
`;
export default ParagraphComponent;
