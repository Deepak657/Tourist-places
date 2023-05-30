import React from "react";
import styled from "styled-components";
import { BsTelephoneFill } from "react-icons/bs";
import { BiMessageEdit } from "react-icons/bi";
const GuiderCard = () => {
  return (
    <GuiderCardStyle>
      <GuiderNameImage>
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <GuiderDetails>
          <GuiderName>Sher Nadir</GuiderName>
          <GuiderDuity>Guider</GuiderDuity>
        </GuiderDetails>
      </GuiderNameImage>
      <IconContainer>
        <Icon>
          <BiMessageEdit style={{ color: "rgb(11,151,252)" }} />
        </Icon>
        <Icon>
          <BsTelephoneFill style={{ color: "rgb(11,151,252)" }} />
        </Icon>
      </IconContainer>
    </GuiderCardStyle>
  );
};

const GuiderCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GuiderNameImage = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;
const GuiderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const GuiderName = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
const GuiderDuity = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 700;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const Icon = styled.div`
  display: flex;
  padding: 10px;
  background: #f3f1f1;
  border-radius: 50%;
  filter: drop-shadow(0px 5px 2px #adacac);
`;
export default GuiderCard;
