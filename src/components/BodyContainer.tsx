import React from "react";
import styled from "styled-components";
import ParagraphComponent from "../components/ParagraphComponent";
import HeadingComponent from "../components/HeadingComponent";

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
      <img
        src={image}
        alt=""
        width="100%"
        height="280px"
        style={{ objectFit: "cover", flexBasis: "50%", borderRadius: "10px" }}
      />
    </DestinationBodyContainer>
  );
};
const DestinationBodyContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto 0;
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
