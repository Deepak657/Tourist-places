import React from "react";
import BodyContainer from "../components/Container/BodyContainer";
import FooterContainer from "../components/Container/FooterContainer";
import { Wrapper } from "./Home";
import styled from "styled-components";
import ReservationCard from "../components/Cards/Resevation/ReservationCard";

interface Iprops {
  id: number;
  image: string;
  title: string;
  location: string;
  review: number;
}
export const ResevationData: Iprops[] = [
  {
    id: 1,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
  {
    id: 2,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
  {
    id: 3,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
  {
    id: 4,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
  {
    id: 5,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
  {
    id: 6,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/50861127_20220223171735.jpg",
    title: "Serena Hotel",
    location: "Islamabad, pakistan",
    review: 5,
  },
];

const Resevations = () => {
  return (
    <>
      <Wrapper>
        <BodyContainer
          heading="Best Every Reservations For Your"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg"
        />

        <ReservationCardContainerStyle>
          {ResevationData.map((item) => {
            return (
              <ReservationCard
                key={item.id}
                image={item.image}
                heading={item.title}
                location={item.location}
                review={item.review}
              />
            );
          })}
        </ReservationCardContainerStyle>
      </Wrapper>
      <FooterContainer />
    </>
  );
};

export const ReservationCardContainerStyle = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 45px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Resevations;
