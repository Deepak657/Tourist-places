import React from "react";
import styled from "styled-components";
import { Content } from "./ParagraphComponent";
interface Iprops {
  content: string;
}

const AboutContentList = ({ content }: Iprops) => {
  return (
    <ListContent>
      <Icon></Icon>
      <Content
        style={{
          marginBottom: "0",
          lineHeight: 1.3,
        }}
      >
        {content}
      </Content>
    </ListContent>
  );
};
const ListContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Icon = styled.div`
  padding: 4px;
  background: orange;
  border-radius: 50%;
`;

export default AboutContentList;
