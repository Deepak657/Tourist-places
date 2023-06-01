import React from "react";
import styled from "styled-components";
import { ModifiedAboutContentList } from "../GlobalComponent/ParagraphComponent";
interface Iprops {
  content: string;
}

const AboutContentList = ({ content }: Iprops) => {
  return (
    <ListContent>
      <Icon></Icon>
      <ModifiedAboutContentList>{content}</ModifiedAboutContentList>
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
