import React from "react";
import styled from "styled-components";
import Lable from "./Lable";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

interface Iprops {
  img: string;
}
const ContactForm = ({ img }: Iprops) => {
  const navigate = useNavigate();
  return (
    <ContactFormStyle>
      <img
        className="image"
        src={img}
        alt=""
        width="45%"
        height="530px"
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          border: "medium dashed rgb(11,151,252)",
        }}
      />
      <Form>
        <Lable lable="Full Name" fontSize="18px" display="block" />
        <InputField
          placeHolder="Input Your Name"
          background="#ebebeb"
          display="block"
        />
        <Lable lable="Email" fontSize="18px" display="block" />
        <InputField
          placeHolder="Input Email Here"
          background="#ebebeb"
          display="block"
        />
        <Lable lable="Message" fontSize="18px" display="block" />
        <TextArea background="#ebebeb" placeholder="Write a Message Here" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonComponent
            text="Send"
            onclick={() => navigate("")}
            icon=""
            padding="10px 50px"
            fontSize="16px"
          />
        </div>
      </Form>
    </ContactFormStyle>
  );
};
const ContactFormStyle = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 120px;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    .image {
      width: 100%;
      height: 400px;
    }
    gap: 50px;
  }
`;
const Form = styled.div`
  line-height: 5;
  width: 45%;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

export default ContactForm;
