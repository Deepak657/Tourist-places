import React from "react";
import AboutContentList from "../Contents/AboutContentList";
import styled from "styled-components";

const AboutContentListContainer = () => {
  return (
    <ContentListContainer>
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
        quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
      <AboutContentList
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolor
quas, laboriosam delectus veritatis totam molestiae art hicj"
      />
    </ContentListContainer>
  );
};
const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 0;
`;

export default AboutContentListContainer;
