import React from "react";
import { ModifiedBackgroundImage } from "../../pages/Blogs";
import ButtonComponent from "../Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Iprops {
  img: string;
  title: string;
}
const BackgraoundImageContainer = ({ img, title }: Iprops) => {
  const navigate = useNavigate();

  return (
    <ModifiedBackgroundImage url={img} height="600px">
      <Title>{title}</Title>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        consectetur ducimus doloribus alias remgtheryh temporibus.sit amet
        consectetur adipisicing elit. Deserunt consectetur ducimus doloribus
        alias remgtheryh temporibus
      </Description>
      <ButtonComponent
        text="See More"
        onClick={() => navigate("")}
        icon=""
        padding="12px 100px"
        fontSize="18px"
      />
    </ModifiedBackgroundImage>
  );
};

export const Title = styled.h4`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 44px;
  max-width: 600px;
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
`;

export const ModifiedTitleBlog = styled(Title)`
  align-self: flex-end;
`;
const Description = styled.p`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 14px;
  max-width: 700px;
  text-align: center;
  color: #fff;
  margin-bottom: 120px;
`;

export default BackgraoundImageContainer;
