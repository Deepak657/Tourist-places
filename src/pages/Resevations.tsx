import React from "react";
import BodyContainer from "../components/BodyContainer";
import ReservationContainer from "../components/ReservationContainer";
import FooterContainer from "../components/FooterContainer";

const Resevations = () => {
  return (
    <>
      <BodyContainer
        heading="Best Every Reservations For Your"
        headingTwo=""
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
        image="https://theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg"
      />
      <ReservationContainer />
      <ReservationContainer />
      <ReservationContainer />
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </>
  );
};

export default Resevations;
