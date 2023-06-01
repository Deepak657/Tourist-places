import React from "react";
import styled from "styled-components";
import CardHeading from "../../GlobalComponent/CardHeading";
import CardLocation from "../../GlobalComponent/CardLocation";
import CradReview from "../Review/CradReview";
import ButtonComponent from "../../Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import GuiderCard from "../Guider/GuiderCard";

interface Iprops {
  image: string;
  heading: string;
  location: string;
  review: number;
}

const ReservationCard = ({ image, heading, location, review }: Iprops) => {
  const navigate = useNavigate();
  return (
    <ReservationCardStyle>
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
        <ReviewButtonContainer>
          <CradReview review={review} />
          <ButtonComponent
            text="Details"
            onclick={() => navigate("")}
            icon=""
            padding="8px 16px"
            fontSize="13px"
          />
        </ReviewButtonContainer>
        <GuiderCard />
      </Genric>
    </ReservationCardStyle>
  );
};

const ReservationCardStyle = styled.div`
  width: 370px;
  background: #fff;
  border-radius: 5px;
  :hover {
    box-shadow: 0 0 10px 2px #cecdcd;
    transition: 0.3s;
  }
`;
const Genric = styled.div`
  padding: 10px 15px 15px;
`;
const ReviewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 16px;
`;

export default ReservationCard;
