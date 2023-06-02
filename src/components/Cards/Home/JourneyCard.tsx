import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
interface Ijourney {
  options: string;
  seleted: string;
  icon?: JSX.Element;
}
const JourneyCard = ({ options, seleted, icon }: Ijourney) => {
  return (
    <JourneyCardStyle>
      <JorneyHeading>
        <Span>
          {icon}
          {options}
        </Span>
        <FaChevronDown style={{ fontSize: "24px" }} />
      </JorneyHeading>
      {seleted}
    </JourneyCardStyle>
  );
};

const JourneyCardStyle = styled.div`
  background: #fff;
  padding: 10px;
  width: 260px;
  color: #252424;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 20px;
  :hover {
    transform: scale(1.3, 1.3);
    transition: 0.3s;
  }
`;
const JorneyHeading = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export default JourneyCard;
