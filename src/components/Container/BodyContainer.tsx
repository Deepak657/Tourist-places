import React from "react";
import styled from "styled-components";
import ParagraphComponent from "../GlobalComponent/ParagraphComponent";
import HeadingComponent from "../GlobalComponent/HeadingComponent";

interface Iprops {
  heading: string;
  headingTwo: string;
  paragraph: string;
  image: string;
}

const BodyContainer = ({ heading, headingTwo, paragraph, image }: Iprops) => {
  return (
    <DestinationBodyContainer>
      <DestinationLeftBody>
        <HeadingComponent heading={heading} />
        <HeadingTwo>{headingTwo}</HeadingTwo>
        <ParagraphComponent paragraph={paragraph} />
      </DestinationLeftBody>
      <Image src={image} alt="" style={{}} />
    </DestinationBodyContainer>
  );
};

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  flex-basis: 50%;
  border-radius: 10px;
`;
const DestinationBodyContainer = styled.div`
  margin: 50px 0 0;
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const HeadingTwo = styled.h4`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin: 30px 0;
  color: ${({ theme }) => theme.colors.heading};
`;

const DestinationLeftBody = styled.div`
  flex-basis: 50%;
  padding: 20px 0;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

export default BodyContainer;
