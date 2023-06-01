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

const DestinationCard = (props: Iprops) => {
  const { image, heading, location, price, review } = props;
  const navigate = useNavigate();
  return (
    <DestinationCardStyle>
      <Image src={image} alt="" />
      <Genric>
        <CardHeading heading={heading} />
        <CardLocation location={location} />
        <PriceReviewContainer>
          <Price>
            <Span>${price}.00</Span>per day
          </Price>
          <CradReview review={review} />
        </PriceReviewContainer>
        <ButtonComponent
          text="Book a Trip"
          onClick={() => navigate("")}
          icon={<IoAirplaneSharp style={{ fontSize: "18px" }} />}
          padding="8px 16px"
          fontSize="13px"
        />
      </Genric>
    </DestinationCardStyle>
  );
};

const Image = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 5px;
  object-fit: cover;
`;
const Span = styled.span`
  color: rgb(11, 151, 252);
`;
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
