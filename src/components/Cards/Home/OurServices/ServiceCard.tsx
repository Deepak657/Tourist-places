import React from "react";
import styled from "styled-components";
import CardHeading from "../../../GlobalComponent/CardHeading";

interface Iprops {
  icon?: JSX.Element;
  heading: string;
  offer: string;
}
const ServiceCard = ({ icon, heading, offer }: Iprops) => {
  return (
    <ServiceCardStyle>
      <Icon>{icon}</Icon>
      <ServiceDetails>
        <CardHeading heading={heading} />
        <Offer>{offer}</Offer>
      </ServiceDetails>
    </ServiceCardStyle>
  );
};

const ServiceCardStyle = styled.div`
  width: 260px;
  text-align: center;
  cursor: pointer;
  :hover {
    transform: scale(1.3, 1.3);
    transition: 0.3s;
  }
`;
const Icon = styled.div`
  padding: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.heading};
  display: inline-block;
`;
const ServiceDetails = styled.div`
  width: 100%;
  background: rgb(218, 217, 217);
  padding: 10px 20px;
  border-radius: 10px 10px 8px 8px;
  filter: drop-shadow(0px 5px 2px #adacac);
`;
const Offer = styled.p`
  text-align-last: center;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #242424;
`;

export default ServiceCard;
