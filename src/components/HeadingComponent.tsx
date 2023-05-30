import React from "react";
import styled from "styled-components";

interface Iheading {
  heading: string;
}

const HeadingComponent = ({ heading }: Iheading) => {
  return <Heading>{heading}</Heading>;
};

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  border-left: 3px solid ${({ theme }) => theme.colors.heading};
  font-family: sans-serif;
  font-size: 49px;
  padding-left: 4px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.4;
`;

export default HeadingComponent;
