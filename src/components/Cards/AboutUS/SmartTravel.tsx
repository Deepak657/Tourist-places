import React from "react";
import { Heading } from "../../GlobalComponent/CardHeading";
import styled from "styled-components";

interface Iprops {
  title: string;
  img: string;
  order: number;
  component: any;
  height: string;
}
const SmartTravel = ({ title, img, height, order, component }: Iprops) => {
  return (
    <SmartTravelStyle>
      <Description order={order}>
        <Title>{title}</Title>
        {component}
      </Description>
      <Image src={img} alt="" height={height} />
    </SmartTravelStyle>
  );
};

const Image = styled.img<{ height: string }>`
  width: 50%;
  height: ${({ height }) => height};
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 100%;
    height: 400px;
  }
`;

const Title = styled(Heading)`
  font-size: 40px;
`;

const Description = styled.div<{ order: number }>`
  width: 39%;
  order: ${({ order }) => order};
`;
const SmartTravelStyle = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 120px;
  align-items: center;
  @media (max-width: 400px) {
    .image {
      width: 100%;
      height: 400px;
    }
    .content {
      flex-basis: 100%;
    }
  }
`;

export default SmartTravel;
