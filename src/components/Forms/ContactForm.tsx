import React from "react";
import styled from "styled-components";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ButtonComponent from "../Buttons/ButtonComponent";
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
        <InputField
          placeHolder="Input Your Name"
          background="#ebebeb"
          lable="Full Name"
        />
        <InputField
          placeHolder="Input Email Here"
          background="#ebebeb"
          lable="Email"
        />
        <TextArea
          background="#ebebeb"
          placeholder="Write a Message Here"
          lable="Message"
        />
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
  margin: 50px 0;
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
