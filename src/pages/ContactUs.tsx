import React from "react";
import BackgraoundImageContainer from "../components/BackgraoundImageContainer";
import ContactForm from "../components/ContactForm";
import FooterContainer from "../components/FooterContainer";

const ContactUs = () => {
  return (
    <div>
      <BackgraoundImageContainer
        img="https://noalcanon.org/wp-content/uploads/2019/07/photographer-3672010_960_720.jpg"
        title="Contact Us"
      />

      <ContactForm img="https://img.freepik.com/free-photo/surprised-excited-businesswoman-holding-laptop-reacting-amazed-smth-awesome-standing-suit-white-background_1258-85609.jpg" />
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </div>
  );
};

export default ContactUs;
