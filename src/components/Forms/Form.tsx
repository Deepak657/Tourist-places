import React from "react";
import Logo from "../GlobalComponent/Logo";
import styled from "styled-components";
interface Iprops {
  title: string;
  subtitle: string;
  img: string;
  children: React.ReactNode;
}

const Form = ({ title, subtitle, img, children }: Iprops) => {
  return (
    <BackgroundImage
      url="https://wallpapercave.com/wp/wp4755737.jpg"
      height="auto"
    >
      <LoginStyle>
        <LoginForm>
          <LogoLable>
            <Logo fontSize="40px" color="rgb(11,151,252)" />
            <SubTitle>Smart Travel</SubTitle>
          </LogoLable>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          {children}
        </LoginForm>
        <Image src={img} alt="" />
      </LoginStyle>
    </BackgroundImage>
  );
};

const Image = styled.img`
  object-fit: cover;
  border-radius: 0 10px 10px 0;
  width: 50%;
  height: 600px;
  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 300px;
  }
`;

export const BackgroundImage = styled.div<{ url: string; height: string }>`
  background: url(${({ url }) => url}) center;
  background-size: cover;
  padding: 80px;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 400px) {
    padding: 40px;
  }
`;

const LoginForm = styled.div`
  padding: 25px 70px 30px 30px;
  width: 50%;
  line-height: 1.8;

  @media (max-width: 850px) {
    flex-basis: 100%;
    padding: 0;
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
    padding: 0;
  }
`;

const LoginStyle = styled.div`
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  background: #fff;
  flex-wrap: wrap-reverse;
  justify-content: center;

  @media (max-width: 400px) {
    line-height: 1.5;
  }
`;
const Title = styled.h4`
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 700;
`;
const SubTitle = styled.h4`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 700;
`;

const LogoLable = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 40px;
  align-items: center;
`;
export default Form;
