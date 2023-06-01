import React from "react";
import DestinationCard from "./DestinationCard";
import styled from "styled-components";
const DestinationCardContainer = () => {
  return (
    <>
      <DestinationCardContainerStyle>
        <DestinationCard
          image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
          heading="Taj Mahal"
          location="Agra, India"
          price={300}
          review={5}
        />
        <DestinationCard
          image="https://cdn.asp.events/CLIENT_Oliver_K_15A4C8AE_5056_B739_54CFDE58102DEF33/sites/sydney-build-2024/media/libraries/sydney-build-blog/Sydney%20Opera%20House%20image.png"
          heading="Opera House"
          location="Sydney, Australasia"
          price={300}
          review={5}
        />
        <DestinationCard
          image="https://www.renown-travel.com/images/wat-arun-bangkok-l.jpg"
          heading="Arun Temple"
          location="Bangkok, Thailand"
          price={300}
          review={5}
        />
      </DestinationCardContainerStyle>
      <DotContainer>
        <div className="dot" style={{ background: "#e4dfdf" }}></div>
        <div className="dot" style={{ background: "#7b7979" }}></div>
        <div className="dot" style={{ background: "rgb(172, 212, 255)" }}></div>
      </DotContainer>
    </>
  );
};
const DestinationCardContainerStyle = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 45px;
  justify-content: center;
  flex-wrap: wrap;
`;
const DotContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  .dot {
    padding: 6px;
    border-radius: 50%;
  }
`;

export default DestinationCardContainer;
