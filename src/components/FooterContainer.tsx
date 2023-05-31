import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import FooterLink from "./FooterLink";
import InputField from "./InputField";

import { CiFacebook } from "react-icons/ci";
import { BsInstagram, BsPlayBtn } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
interface Iprops {
  colorHeading: string;
  colorLink: string;
  fontSizeHeading: string;
  fontSizeLink: string;
}

const FooterContainer = ({
  colorHeading,
  colorLink,
  fontSizeHeading,
  fontSizeLink,
}: Iprops) => {
  const navigate = useNavigate();
  return (
    <FooterBody>
      <FooterContaienrStyle>
        <FooterLinkStyle gap="30px" marginTop="">
          <Logo color="#fff" fontSize="80px" />
          <FooterLink
            text="Copyright @ Love To Fly 2023 All Right Reserved"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterLink
            text="Menu"
            color={colorHeading}
            fontSize={fontSizeHeading}
            onclick={() => navigate("")}
          />
          <FooterLink
            text="Home"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/Tourist-places")}
          />
          <FooterLink
            text="Destination"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/destination")}
          />
          <FooterLink
            text="Resevations"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/resevations")}
          />
          <FooterLink
            text="Blogs"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/blogs")}
          />
          <FooterLink
            text="About Us"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/aboutus")}
          />
          <FooterLink
            text="Contact Us"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/contactus")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterLink
            text="Information"
            color={colorHeading}
            fontSize={fontSizeHeading}
            onclick={() => navigate("")}
          />
          <FooterLink
            text="Home"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/")}
          />
          <FooterLink
            text="Destination"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/destination")}
          />
          <FooterLink
            text="Resevations"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/resevations")}
          />
          <FooterLink
            text="Blogs"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("/blogs")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterLink
            text="Contact info"
            color={colorHeading}
            fontSize={fontSizeHeading}
            onclick={() => navigate("")}
          />
          <FooterLink
            text="+12345612245424"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("")}
          />
          <FooterLink
            text="dk6570049@gmail.com"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("")}
          />
          <FooterLink
            text="123,jalandhar,punjab"
            color={colorLink}
            fontSize={fontSizeLink}
            onclick={() => navigate("")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterLink
            text="Search"
            color={colorHeading}
            fontSize={fontSizeHeading}
            onclick={() => navigate("")}
          />
          <InputField placeHolder="Search" background="#fff" display="block" />
          <FooterLinkStyle gap="15px" marginTop="30px">
            <FooterLink
              text="Follow us on"
              color={colorHeading}
              fontSize={fontSizeLink}
              onclick={() => navigate("")}
            />
            <Icon>
              <BsPlayBtn style={{ fontSize: "22px" }} />
              <BsInstagram />
              <CiFacebook style={{ fontSize: "24px" }} />
            </Icon>
          </FooterLinkStyle>
        </FooterLinkStyle>
      </FooterContaienrStyle>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  max-width: 100%;
  margin: 100px 0 0;
  background: ${({ theme }) => theme.colors.heading};
  padding: 50px 0;
`;
const FooterContaienrStyle = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 82px;
  flex-wrap: wrap;
`;
const FooterLinkStyle = styled.div<{ gap: string; marginTop: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  margin-top: ${({ marginTop }) => marginTop};
`;
const Icon = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 18px;
  color: #fff;
`;

export default FooterContainer;
