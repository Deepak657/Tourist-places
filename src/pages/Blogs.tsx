import React from "react";
import { BackgroundImage } from "../components/Form";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/CardHeading";
import { Content } from "../components/ParagraphComponent";
import BlogsCardContaner from "../components/BlogsCardContaner";
import { SeeMore } from "./Home";
import FooterContainer from "../components/FooterContainer";
import styled from "styled-components";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundImage
        url="https://images.pexels.com/photos/4109548/pexels-photo-4109548.jpeg"
        height="500px"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Heading
          style={{
            fontSize: "40px",
            color: "#fff",
            textAlign: "center",
            alignSelf: "flex-end",
            width: "460px",
            lineHeight: "1.5",
          }}
        >
          20 Most Beautiful Travel Blogs In 2023
        </Heading>
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
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </>
  );
};

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 15px auto 0;
  display: flex;
  justify-content: center;
`;

export default Blogs;
