import React from "react";
import Logo from "./Logo";
import Lable from "./Lable";
import InputField from "./InputField";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";
interface Iprops {
  title: string;
  subtitle: string;
  lableEmail: string;
  lablePassword: string;
  lableOr: string;
  forgotPasswordLink: string;
  signUpLink: string;
  alreadyAccountLink: string;
  placeholder1: string;
  placeholder2: string;
  placeholder3: string;
  show: string;
  hide: string;
  img: string;
  lableHide: string;
}

const Form = ({
  title,
  subtitle,
  lableEmail,
  lablePassword,
  lableOr,
  forgotPasswordLink,
  signUpLink,
  alreadyAccountLink,
  placeholder1,
  placeholder2,
  placeholder3,
  show,
  hide,
  img,
  lableHide,
}: Iprops) => {
  const navigate = useNavigate();
  return (
    <BackgroundImage
      url="https://wallpapercave.com/wp/wp4755737.jpg"
      height="auto"
    >
      <LoginStyle>
        <LoginForm>
          <LogoLable>
            <Logo fontSize="40px" color="rgb(11,151,252)" />
            <Lable lable="Smart Travel" fontSize="18px" display={show} />
          </LogoLable>
          <LableContainer
            flexDirection="column"
            textAlign="center"
            gap="0px"
            margin="0"
          >
            <Lable lable={title} fontSize="30px" display={show} />
            <Lable lable={subtitle} fontSize="14px" display={show} />
          </LableContainer>
          <LableContainer
            flexDirection="column"
            textAlign="start"
            gap="10px"
            margin="0"
          >
            <Lable lable={lableEmail} fontSize="18px" display={lableHide} />
            <InputField
              placeHolder={placeholder1}
              background="#dfdede"
              display={show}
            />
            <Lable lable={lablePassword} fontSize="18px" display={lableHide} />
            <InputField
              placeHolder={placeholder2}
              background="#dfdede"
              display={show}
            />
            <InputField
              placeHolder={placeholder3}
              background="#dfdede"
              display={hide}
            />
            <ButtonComponent
              text="Login"
              onclick={() => navigate("")}
              icon=""
              padding="12px 20px"
              fontSize="20px"
            />
          </LableContainer>
          <LableContainer
            flexDirection="column"
            textAlign="center"
            gap="0px"
            margin="10px 0"
          >
            <Lable lable={alreadyAccountLink} fontSize="13px" display={hide} />
            <Lable lable={lableOr} fontSize="13px" display={show} />
          </LableContainer>
          <ButtonWrapper>
            <ButtonComponent
              text="Facebook"
              onclick={() => navigate("")}
              icon={<BsFacebook />}
              padding="12px 10px"
              fontSize="20px"
            />
            <ButtonComponent
              text="Google"
              onclick={() => navigate("")}
              icon={<FcGoogle />}
              padding="12px 10px"
              fontSize="20px"
            />
            <ButtonComponent
              text="Twitter"
              onclick={() => navigate("")}
              icon={<FaTwitterSquare />}
              padding="12px 10px"
              fontSize="20px"
            />
          </ButtonWrapper>
          <LableContainer
            flexDirection="column"
            textAlign="center"
            gap="0px"
            margin="0"
          >
            <Lable
              lable={forgotPasswordLink}
              fontSize="15px"
              display={lableHide}
            />
            <Lable lable={signUpLink} fontSize="15px" display={lableHide} />
          </LableContainer>
        </LoginForm>

        <img
          className="image"
          src={img}
          alt=""
          width="50%"
          height="600px"
          style={{ objectFit: "cover", borderRadius: "0 10px 10px 0" }}
        />
      </LoginStyle>
    </BackgroundImage>
  );
};

export const BackgroundImage = styled.div<{ url: string; height: string }>`
  background: url(${({ url }) => url}) center;
  background-size: cover;
  max-width: 1200px;
  margin: auto;
  padding: 80px;
  height: ${({ height }) => height};
  @media (max-width: 400px) {
    padding: 40px;
  }
`;

const LoginForm = styled.div`
  padding: 25px 70px 30px 30px;
  width: 50%;
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
  line-height: 2;
  justify-content: center;
  @media (max-width: 850px) {
    .image {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    line-height: 1.5;
    .image {
      width: 100%;
      height: 300px;
    }
  }
`;

const LogoLable = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 40px;
`;
const LableContainer = styled.div<{
  flexDirection: string;
  textAlign: string;
  gap: string;
  margin: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  text-align: ${({ textAlign }) => textAlign};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Form;
