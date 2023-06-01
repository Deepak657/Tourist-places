import React from "react";
import styled from "styled-components";
import CardHeading from "../../GlobalComponent/CardHeading";
import CradReview from "../Review/CradReview";
import CardLocation from "../../GlobalComponent/CardLocation";
import ButtonComponent from "../../Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { IoAirplaneSharp } from "react-icons/io5";

interface Iprops {
  image: string;
  heading: string;
  location: string;
  price: number;
  review: number;
}

const DestinationCard = ({
  image,
  heading,
  location,
  price,
  review,
}: Iprops) => {
  const navigate = useNavigate();
  return (
    <DestinationCardStyle>
      <img
        src={image}
        alt=""
        width="100%"
        height="220px"
        style={{ borderRadius: "5px", objectFit: "cover" }}
      />
      <Genric>
        <CardHeading heading={heading} />
        <CardLocation location={location} />
        <PriceReviewContainer>
          <Price>
            <span style={{ color: "rgb(11,151,252)" }}>${price}.00</span>per day
          </Price>
          <CradReview review={review} />
        </PriceReviewContainer>
        <ButtonComponent
          text="Book a Trip"
          onclick={() => navigate("")}
          icon={<IoAirplaneSharp style={{ fontSize: "18px" }} />}
          padding="8px 16px"
          fontSize="13px"
        />
      </Genric>
    </DestinationCardStyle>
  );
};

const DestinationCardStyle = styled.div`
  width: 370px;
  background: #fff;
  border-radius: 5px;
  :hover {
    box-shadow: 0 0 10px 2px #cecdcd;
    transition: 0.3s;
  }
`;
const Genric = styled.div`
  padding: 10px 15px;
`;
const Price = styled.div`
  font-weight: 700;
  font-family: sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const PriceReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 20px;
`;

export default DestinationCard;
