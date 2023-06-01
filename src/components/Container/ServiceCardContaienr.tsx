import React from "react";
import ServiceCard from "../Cards/Home/OurServices/ServiceCard";
import styled from "styled-components";
import { TbCar } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { RiBuilding4Line, RiVisaFill } from "react-icons/ri";
const ServiceCardContaienr = () => {
  return (
    <>
      <ServiceHeading>Our Services</ServiceHeading>
      <ServiceContainer>
        <ServiceCard
          icon={<RiBuilding4Line2 />}
          heading="Hotel"
          offer="Get Awesome Discount up to 25% just for you, our beloved customer"
        />
        <ServiceCard
          icon={<TbCar2 />}
          heading="Cars"
          offer="Get Awesome Discount up to 25% just for you, our beloved customer"
        />
        <ServiceCard
          icon={<RiVisaFill2 />}
          heading="VISA"
          offer="Get Awesome Discount up to 25% just for you, our beloved customer"
        />
        <ServiceCard
          icon={<CiUser2 />}
          heading="Guider"
          offer="Get Awesome Discount up to 25% just for you, our beloved customer"
        />
      </ServiceContainer>
    </>
  );
};

const RiBuilding4Line2 = styled(RiBuilding4Line)`
  color: #fff;
  font-size: 60px;
`;
const TbCar2 = styled(TbCar)`
  color: #fff;
  font-size: 60px;
`;

const RiVisaFill2 = styled(RiVisaFill)`
  color: #fff;
  font-size: 60px;
`;

const CiUser2 = styled(CiUser)`
  color: #fff;
  font-size: 60px;
`;

const ServiceHeading = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  text-align: center;
  font-size: 34px;
  font-family: sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
`;
const ServiceContainer = styled.div`
  display: flex;
  gap: 53px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 50px;
  flex-wrap: wrap;
`;

export default ServiceCardContaienr;
