import React from "react";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/GlobalComponent/CardHeading";
import { Content } from "../components/GlobalComponent/ParagraphComponent";
import BlogsCardContaner from "../components/Cards/Blogs/BlogsCardContaner";
import { SeeMore, Wrapper } from "./Home";
import FooterContainer from "../components/Footer/FooterContainer";
import styled from "styled-components";
import { Title } from "../components/GlobalComponent/BackgraoundImageContainer";
const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <BackgroundImage
          url="https://images.pexels.com/photos/4109548/pexels-photo-4109548.jpeg"
          height="500px"
        >
          <Title2>20 Most Beautiful Travel Blogs In 2023</Title2>
          <ButtonComponent
            text="See More"
            onclick={() => navigate("")}
            icon=""
            padding="12px 100px"
            fontSize="18px"
          />
        </BackgroundImage>
        <Heading2>Our Latest Blogs Posts</Heading2>
        <ContentWrapper>
          <Content2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            consectetur ducimus doloribus alias remgtheryh temporibus sed.
          </Content2>
        </ContentWrapper>
        <BlogsCardContaner />
        <SeeMore>
          <ButtonComponent
            text="See More"
            onclick={() => navigate("")}
            icon=""
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
      </Wrapper>
      <FooterContainer />
    </>
  );
};

const Heading2 = styled(Heading)`
  font-size: 40px;
  text-align: center;
  margin: 50px 0 0;
`;
const Title2 = styled(Title)`
  align-self: flex-end;
`;
const Content2 = styled(Content)`
  width: 400px;
  text-align: center;
`;
export const BackgroundImage = styled.div<{ url: string; height: string }>`
  background: url(${({ url }) => url});
  background-size: cover;
  padding: 80px;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 400px) {
    padding: 40px;
  }
`;

const ContentWrapper = styled.div`
  margin: 15px 0 0;
  display: flex;
  justify-content: center;
`;

export default Blogs;
