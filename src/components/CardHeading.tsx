import React from "react";
import styled from "styled-components";
interface Iprops {
  heading: string;
}

const CardHeading = ({ heading }: Iprops) => {
  return <Heading>{heading}</Heading>;
};

export const Heading = styled.h4`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.heading};
`;
export default CardHeading;
