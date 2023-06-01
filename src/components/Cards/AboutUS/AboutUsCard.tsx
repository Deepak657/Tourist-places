import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import CradReview from "../Review/CradReview";

interface Iprops {
  image: string;
  name: string;
}
const AboutUsCard = ({ image, name }: Iprops) => {
  const navigate = useNavigate();
  return (
    <AboutUsCardStyle>
      <ImageReview>
        <img
          src={image}
          alt=""
          width="65px"
          height="65px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
        <NameDate>
          <AboutNameReview>
            <AboutName>{name}</AboutName>
            <CradReview review={5} />
          </AboutNameReview>
          <AboutDate>10/2/2023</AboutDate>
        </NameDate>
      </ImageReview>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias
        deleniti, aperiam fugit doloremque sequi odit nobis culpa magni ipsum
        neque ex commodi tempora tempore. fugit doloremque sequi odit nobis
        culpa magni ipsum neque ex commodi tempora tempore
      </Paragraph>
      <SeeMore>
        <ButtonComponent
          text="See More"
          onclick={() => navigate("")}
          icon=""
          padding="8px 16px"
          fontSize="13px"
        />
      </SeeMore>
    </AboutUsCardStyle>
  );
};
const AboutUsCardStyle = styled.div`
  width: 300px;
  background: #fff;
  padding: 20px 10px;
  filter: drop-shadow(0px 3px 1px #adacac);

  :hover {
    transform: scale(1.2, 1.2);
    transition: 0.3s;
  }
`;
const Paragraph = styled.p`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  margin: 25px 0;
`;
const AboutName = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
`;
const AboutNameReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AboutDate = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 10px;
`;
const ImageReview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const NameDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
`;
export default AboutUsCard;
