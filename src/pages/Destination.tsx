import React from "react";
import BodyContainer from "../components/Container/BodyContainer";
import FooterContainer from "../components/Container/FooterContainer";
import { Wrapper } from "./Home";
import DestinationCard from "../components/Cards/Destinations/DestinationCard";
import styled from "styled-components";

interface Iprops {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  review: number;
}

export const DestinationData: Iprops[] = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    title: "Taj Mahal",
    location: "Agra, India",
    price: 300,
    review: 5,
  },
  {
    id: 2,
    image:
      "https://cdn.asp.events/CLIENT_Oliver_K_15A4C8AE_5056_B739_54CFDE58102DEF33/sites/sydney-build-2024/media/libraries/sydney-build-blog/Sydney%20Opera%20House%20image.png",
    title: "Opera House",
    location: "Sydney, Australasia",
    price: 300,
    review: 5,
  },
  {
    id: 3,
    image: "https://www.renown-travel.com/images/wat-arun-bangkok-l.jpg ",
    title: "Arun Temple",
    location: "Bangkok, Thailand",
    price: 300,
    review: 5,
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    title: "Taj Mahal",
    location: "Agra, India",
    price: 300,
    review: 5,
  },
  {
    id: 5,
    image:
      "https://cdn.asp.events/CLIENT_Oliver_K_15A4C8AE_5056_B739_54CFDE58102DEF33/sites/sydney-build-2024/media/libraries/sydney-build-blog/Sydney%20Opera%20House%20image.png",
    title: "Opera House",
    location: "Sydney, Australasia",
    price: 300,
    review: 5,
  },
  {
    id: 6,
    image: "https://www.renown-travel.com/images/wat-arun-bangkok-l.jpg ",
    title: "Arun Temple",
    location: "Bangkok, Thailand",
    price: 300,
    review: 5,
  },
];

const Destination = () => {
  return (
    <>
      <Wrapper>
        <BodyContainer
          heading="Lets Explore Your Destination"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
        possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
        obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=170667a&w=0&k=20&c=a5LdzykLqSgHBOxjxAXdgiULR8WjQ3zHEYH6Kan8SgU="
        />
        <DestinationCardContainerStyle>
          {DestinationData.map((item) => {
            return (
              <DestinationCard
                key={item.id}
                image={item.image}
                heading={item.title}
                location={item.location}
                price={item.price}
                review={item.review}
              />
            );
          })}
        </DestinationCardContainerStyle>
        <DotContainer>
          <Dot1 />
          <Dot2 />
          <Dot3 />
        </DotContainer>
      </Wrapper>
      <FooterContainer />
    </>
  );
};

export const DestinationCardContainerStyle = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 45px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Dot1 = styled.div`
  padding: 6px;
  border-radius: 50%;
  background: #e4dfdf;
`;

const Dot2 = styled(Dot1)`
  background: #7b7979;
`;
const Dot3 = styled(Dot1)`
  background: rgb(172, 212, 255);
`;
const DotContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export default Destination;
