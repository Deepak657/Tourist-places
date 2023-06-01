import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

interface Iprops {
  review: number;
}
const CradReview = ({ review }: Iprops) => {
  return (
    <Review>
      <AiFillStar style={{ color: "rgb(253,247,16)", fontSize: "20px" }} /> (
      {review}.0) Reviews
    </Review>
  );
};
const Review = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 14px;
`;

export default CradReview;
