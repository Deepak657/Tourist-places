import React from "react";
import { Heading } from "./CardHeading";
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
      <div
        style={{
          flexBasis: "39%",
          order: order,
        }}
      >
        <Heading
          style={{
            fontSize: "40px",
          }}
        >
          {title}
        </Heading>
        {component}
      </div>
      <img
        src={img}
        alt=""
        width="50%"
        height={height}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
    </SmartTravelStyle>
  );
};
const SmartTravelStyle = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 120px;
  align-items: center;
`;

export default SmartTravel;
