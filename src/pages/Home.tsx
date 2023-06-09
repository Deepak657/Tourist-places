import React from "react";
import HeadingComponent from "../components/GlobalComponent/HeadingComponent";
import ParagraphComponent from "../components/GlobalComponent/ParagraphComponent";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JourneyCard from "../components/Cards/Home/JourneyCard";
import { IoAirplaneSharp } from "react-icons/io5";
import { HiSearch } from "react-icons/hi";
import BodyContainer from "../components/Container/BodyContainer";
import DestinationCard from "../components/Cards/Destinations/DestinationCard";
import FooterContainer from "../components/Container/FooterContainer";
import { ReservationCardContainerStyle, ResevationData } from "./Resevations";
import { DestinationData, DestinationCardContainerStyle } from "./Destination";
import ReservationCard from "../components/Cards/Resevation/ReservationCard";
import { ClientsData, JourneyCardData, ServiceData } from "../Util";
import AboutUsCard from "../components/Cards/AboutUS/AboutUsCard";
import ServiceCard from "../components/Cards/Home/OurServices/ServiceCard";
const Home = () => {
  const naviagte = useNavigate();
  return (
    <>
      <Wrapper>
        <JourneyBodyContainer>
          <JourneyCardLeft>
            <HeadingContainer>
              <HeadingComponent heading="Let Starts Your Beautiful Jurney With Us" />
            </HeadingContainer>
            <ParagraphComponent
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
      tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
      possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
      obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
            />
            <ButtonContainer>
              <ButtonComponent
                text="Plane a Trip"
                onClick={() => naviagte("")}
                icon={<IoAirplaneSharp style={{ fontSize: "18px" }} />}
                padding="8px 16px"
                fontSize="13px"
              />
              <ButtonComponent
                text="Plane a Trip"
                onClick={() => naviagte("")}
                icon={<HiSearch style={{ fontSize: "18px" }} />}
                padding="8px 16px"
                fontSize="13px"
              />
            </ButtonContainer>
          </JourneyCardLeft>
          <Image
            src="https://www.pngitem.com/pimgs/m/171-1713706_transparent-girl-sitting-png-girl-with-travel-bag.png"
            alt=""
          />
        </JourneyBodyContainer>
        <JourneyCardContainer>
          {JourneyCardData.map((item) => {
            return (
              <JourneyCard
                key={item.id}
                options={item.options}
                seleted={item.seleted}
                icon={item.icon}
              />
            );
          })}
        </JourneyCardContainer>
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
              item.id <= 3 && (
                <DestinationCard
                  key={item.id}
                  image={item.image}
                  heading={item.title}
                  location={item.location}
                  price={item.price}
                  review={item.review}
                />
              )
            );
          })}
        </DestinationCardContainerStyle>
        <ServiceHeading>Our Services</ServiceHeading>

        <ServiceContainer>
          {ServiceData.map((item) => {
            return (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                heading={item.title}
                offer={item.offer}
              />
            );
          })}
        </ServiceContainer>
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
        <BodyContainer
          heading="About Us"
          headingTwo="Our Story"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://hips.hearstapps.com/hmg-prod/images/gettyimages-664584858-1533850465.jpg?resize=1200:*"
        />
        <SeeMore>
          <ButtonComponent
            text="See More"
            onClick={() => naviagte("")}
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
        <BodyContainer
          heading="What's Clients Say About us"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://www.tourradar.com/days-to-come/wp-content/uploads/2019/04/Quotes8.jpg"
        />

        <AboutCardContainerStyle>
          {ClientsData.map((client) => {
            return (
              <AboutUsCard
                key={client.id}
                image={client.image}
                name={client.name}
              />
            );
          })}
        </AboutCardContainerStyle>

        <SeeMore>
          <ButtonComponent
            text="See More"
            onClick={() => naviagte("")}
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
      </Wrapper>
      <FooterContainer />
    </>
  );
};

const ServiceHeading = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  text-align: center;
  font-size: 34px;
  font-family: sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
`;
const ServiceContainer = styled.div`
  display: flex;
  gap: 53px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 50px;
  flex-wrap: wrap;
`;

const AboutCardContainerStyle = styled.div`
  display: flex;
  gap: 150px;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto 30px;
`;

const Image = styled.img`
  width: 50%;
  object-fit: cover;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const JourneyBodyContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1150px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const JourneyCardLeft = styled.div`
  flex-basis: 50%;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;
const HeadingContainer = styled.div`
  padding-right: 210px;
  margin-bottom: 50px;
  @media (max-width: 1150px) {
    padding-right: 0;
    margin-bottom: 0px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;
export const SeeMore = styled.div`
  margin: 40px 0 -30px;
  display: flex;
  justify-content: center;
`;
const JourneyCardContainer = styled.div`
  margin: 100px 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 53px;
`;

export default Home;
