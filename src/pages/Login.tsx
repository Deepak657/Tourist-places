import React from "react";
import Form from "../components/Forms/Form";
import InputField from "../components/Forms/InputField";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";
import { Wrapper } from "./Home";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Form
        title="Welcome"
        subtitle="Log in or Create Account to Continues"
        img="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      >
        <InputField
          placeHolder="Enter Your Email"
          background="#e4e4e4"
          lable="Email"
        />
        <InputField
          placeHolder="Enter Your Password"
          background="#e4e4e4"
          lable="Password"
        />
        <LoginWrapper>
          <ButtonComponent
            text="Login"
            onclick={() => navigate("")}
            icon=""
            padding="12px 20px"
            fontSize="20px"
          />
        </LoginWrapper>

        <P color="#000">or</P>
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
        <P color="rgb(11,151,252)" onClick={() => navigate("")}>
          forget password
        </P>
        <P color="#000">
          Don't have a account?{" "}
          <span
            style={{
              color: "rgb(11,151,252)",
            }}
            onClick={() => navigate("/signup")}
          >
            sign Up here
          </span>{" "}
        </P>
      </Form>
    </Wrapper>
  );
};

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const P = styled.p<{ color: string }>`
  font-family: sans-serif;
  font-size: 14px;
  color: ${({ color }) => color};
  text-align: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
`;
export default Login;
