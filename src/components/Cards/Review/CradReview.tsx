import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

interface Iprops {
  review: number;
}
const CradReview = ({ review }: Iprops) => {
  return (
    <Review>
      <AiFillStar2 /> ({review}.0) Reviews
    </Review>
  );
};

const AiFillStar2 = styled(AiFillStar)`
  color: rgb(253, 247, 16);
  font-size: 20px;
`;
const Review = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 14px;
`;

export default CradReview;
