import React from "react";
import AboutUsCard from "./AboutUsCard";
import styled from "styled-components";

const AboutCardContainer = () => {
  return (
    <AboutCardContainerStyle>
      <AboutUsCard
        image="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
        name="Samra Khan"
      />
      <AboutUsCard
        image="https://umbrella.data.naturalint.com/production/articles/uploads/photo/Untitleddesign403.20220526114538.jpg"
        name="John Cena"
      />
      <AboutUsCard
        image="https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg"
        name="Katherin Toy"
      />
    </AboutCardContainerStyle>
  );
};

const AboutCardContainerStyle = styled.div`
  display: flex;
  gap: 150px;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto 30px;
`;
export default AboutCardContainer;
