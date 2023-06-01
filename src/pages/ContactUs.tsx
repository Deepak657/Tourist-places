import React from "react";
import BackgraoundImageContainer from "../components/GlobalComponent/BackgraoundImageContainer";
import ContactForm from "../components/Forms/ContactForm";
import FooterContainer from "../components/Footer/FooterContainer";
import { Wrapper } from "./Home";

const ContactUs = () => {
  return (
    <>
      <Wrapper>
        <BackgraoundImageContainer
          img="https://noalcanon.org/wp-content/uploads/2019/07/photographer-3672010_960_720.jpg"
          title="Contact Us"
        />

        <ContactForm img="https://img.freepik.com/free-photo/surprised-excited-businesswoman-holding-laptop-reacting-amazed-smth-awesome-standing-suit-white-background_1258-85609.jpg" />
      </Wrapper>
      <FooterContainer />
    </>
  );
};

export default ContactUs;
