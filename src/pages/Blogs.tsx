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
          style={{
            justifyContent: "space-between",
          }}
        >
          <Title
            style={{
              alignSelf: "flex-end",
            }}
          >
            20 Most Beautiful Travel Blogs In 2023
          </Title>
          <ButtonComponent
            text="See More"
            onclick={() => navigate("")}
            icon=""
            padding="12px 100px"
            fontSize="18px"
          />
        </BackgroundImage>
        <Heading
          style={{
            fontSize: "40px",
            textAlign: "center",
            margin: "50px 0 0",
          }}
        >
          Our Latest Blogs Posts
        </Heading>
        <ContentWrapper>
          <Content
            style={{
              width: "400px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            consectetur ducimus doloribus alias remgtheryh temporibus sed.
          </Content>
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
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </>
  );
};

export const BackgroundImage = styled.div<{ url: string; height: string }>`
  background: url(${({ url }) => url}) center;
  background-size: cover;
  padding: 80px;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
