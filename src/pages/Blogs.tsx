import React from "react";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { SeeMore, Wrapper } from "./Home";
import FooterContainer from "../components/Container/FooterContainer";
import styled from "styled-components";
import { ModifiedTitleBlog } from "../components/Container/BackgraoundImageContainer";
import { ModifiedHeadingBlog } from "../components/GlobalComponent/CardHeading";
import { ModifiedContentBlog } from "../components/GlobalComponent/ParagraphComponent";
import { BlogsImageUrl } from "../BlogsImage/BlogsImage";
import BlogsCard from "../components/Cards/Blogs/BlogsCard";
const Blogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <BackgroundImage
          url="https://images.pexels.com/photos/4109548/pexels-photo-4109548.jpeg"
          height="500px"
        >
          <ModifiedTitleBlog>
            20 Most Beautiful Travel Blogs In 2023
          </ModifiedTitleBlog>
          <ButtonComponent
            text="See More"
            onClick={() => navigate("")}
            icon=""
            padding="12px 100px"
            fontSize="18px"
          />
        </BackgroundImage>
        <ModifiedHeadingBlog>Our Latest Blogs Posts</ModifiedHeadingBlog>
        <ContentWrapper>
          <ModifiedContentBlog>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            consectetur ducimus doloribus alias remgtheryh temporibus sed.
          </ModifiedContentBlog>
        </ContentWrapper>
        <BlogsCardContanerStyle>
          {BlogsImageUrl.map((url) => {
            return <BlogsCard img={url.url} id={url.id} />;
          })}
        </BlogsCardContanerStyle>
        <SeeMore>
          <ButtonComponent
            text="See More"
            onClick={() => navigate("")}
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

const BlogsCardContanerStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 105px;
  flex-wrap: wrap;
`;

const BackgroundImage = styled.div<{ url: string; height: string }>`
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
export const ModifiedBackgroundImage = styled(BackgroundImage)`
  justify-content: flex-end;
`;

const ContentWrapper = styled.div`
  margin: 15px 0 0;
  display: flex;
  justify-content: center;
`;

export default Blogs;
