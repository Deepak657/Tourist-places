import React from "react";
import styled from "styled-components";
import ReservationCard from "./ReservationCard";

const ReservationContainer = () => {
  return (
    <ReservationCardContainerStyle>
      <ReservationCard
        image="https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg"
        heading="Serena Hotel"
        location="Islamabad, pakistan"
        review={5}
      />
      <ReservationCard
        image="https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg"
        heading="Serena Hotel"
        location="Islamabad, pakistan"
        review={5}
      />
      <ReservationCard
        image="https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg"
        heading="Serena Hotel"
        location="Islamabad, pakistan"
        review={5}
      />
    </ReservationCardContainerStyle>
  );
};
const ReservationCardContainerStyle = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 45px;
  justify-content: center;
  flex-wrap: wrap;
`;
export default ReservationContainer;
