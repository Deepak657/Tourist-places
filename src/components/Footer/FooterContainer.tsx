import React from "react";
import styled from "styled-components";
import Logo from "../GlobalComponent/Logo";
import FooterLink from "./FooterLink";
import InputField from "../Forms/InputField";

import { CiFacebook } from "react-icons/ci";
import { BsInstagram, BsPlayBtn } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import FooterTitle from "./FooterTitle";

const FooterContainer = () => {
  const navigate = useNavigate();

  return (
    <FooterBody>
      <FooterContaienrStyle>
        <FooterLinkStyle gap="30px" marginTop="">
          <Logo color="#fff" fontSize="80px" />
          <FooterLink
            text="Copyright @ Love To Fly 2023 All Right Reserved"
            onclick={() => navigate("")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterTitle text="Menu" onclick={() => navigate("")} />
          <FooterLink text="Home" onclick={() => navigate("/Tourist-places")} />
          <FooterLink
            text="Destination"
            onclick={() => navigate("/destination")}
          />
          <FooterLink
            text="Resevations"
            onclick={() => navigate("/resevations")}
          />
          <FooterLink text="Blogs" onclick={() => navigate("/blogs")} />
          <FooterLink text="About Us" onclick={() => navigate("/aboutus")} />
          <FooterLink
            text="Contact Us"
            onclick={() => navigate("/contactus")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterTitle text="Information" onclick={() => navigate("")} />

          <FooterLink text="Home" onclick={() => navigate("/")} />
          <FooterLink
            text="Destination"
            onclick={() => navigate("/destination")}
          />
          <FooterLink
            text="Resevations"
            onclick={() => navigate("/resevations")}
          />
          <FooterLink text="Blogs" onclick={() => navigate("/blogs")} />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterTitle text="Contact info" onclick={() => navigate("")} />

          <FooterLink text="+12345612245424" onclick={() => navigate("")} />
          <FooterLink text="dk6570049@gmail.com" onclick={() => navigate("")} />
          <FooterLink
            text="123,jalandhar,punjab"
            onclick={() => navigate("")}
          />
        </FooterLinkStyle>
        <FooterLinkStyle gap="15px" marginTop="">
          <FooterTitle text="Search" onclick={() => navigate("")} />
          <InputField placeHolder="Search" background="#fff" lable="" />
          <FooterLinkStyle gap="15px" marginTop="30px">
            <FooterLink text="Follow us on" onclick={() => navigate("")} />
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
