import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";

interface Iprops {
  location: string;
}
const CardLocation = ({ location }: Iprops) => {
  return (
    <Location>
      <IoLocationOutline style={{ color: "rgb(27, 124, 228)" }} />
      {location}
    </Location>
  );
};
const Location = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

export default CardLocation;
