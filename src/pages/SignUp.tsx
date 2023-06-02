import React from "react";
import Form from "../components/Forms/Form";
import { ButtonWrapper } from "./Login";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import InputField from "../components/Forms/InputField";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { P } from "./Login";
import styled from "styled-components";
import { Wrapper } from "./Home";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Form
        title="Sign Up"
        subtitle="Your details are required here"
        img="https://images.unsplash.com/photo-1622900658258-56508b418f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
      >
        <InputFieldWrapper>
          <InputField placeholder="Full Name" background="#e4e4e4" lable="" />
          <InputField placeholder="Email" background="#e4e4e4" lable="" />
          <InputField placeholder="Password" background="#e4e4e4" lable="" />
          <ButtonComponent
            text="Sign up"
            onClick={() => navigate("")}
            padding="12px 20px"
            fontSize="20px"
          />
        </InputFieldWrapper>
        <P color="#000">Already Have a Account</P>
        <P color="#000">or</P>
        <ButtonWrapper>
          <ButtonComponent
            text="Facebook"
            onClick={() => navigate("")}
            icon={<BsFacebook />}
            padding="12px 10px"
            fontSize="20px"
          />
          <ButtonComponent
            text="Google"
            onClick={() => navigate("")}
            icon={<FcGoogle />}
            padding="12px 10px"
            fontSize="20px"
          />
          <ButtonComponent
            text="Twitter"
            onClick={() => navigate("")}
            icon={<FaTwitterSquare />}
            padding="12px 10px"
            fontSize="20px"
          />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SignUp;
