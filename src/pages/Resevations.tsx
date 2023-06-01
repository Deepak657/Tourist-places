import React from "react";
import BodyContainer from "../components/GlobalComponent/BodyContainer";
import ReservationContainer from "../components/Cards/Resevation/ReservationContainer";
import FooterContainer from "../components/Footer/FooterContainer";
import { Wrapper } from "./Home";

const Resevations = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <FooterContainer />
    </>
  );
};

export default Resevations;
