import React from "react";
import HeadingComponent from "../components/GlobalComponent/HeadingComponent";
import ParagraphComponent from "../components/GlobalComponent/ParagraphComponent";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JourneyCard from "../components/Cards/Home/JourneyCard";
import { IoLocationOutline } from "react-icons/io5";
import { IoAirplaneSharp } from "react-icons/io5";
import { HiSearch } from "react-icons/hi";
import { MdMonetizationOn } from "react-icons/md";
import BodyContainer from "../components/GlobalComponent/BodyContainer";
import DestinationCardContainer from "../components/Cards/Destinations/DestinationCardContainer";
import ServiceCardContaienr from "../components/Cards/Home/OurServices/ServiceCardContaienr";
import ReservationContainer from "../components/Cards/Resevation/ReservationContainer";
import AboutCardContainer from "../components/Cards/AboutUS/AboutCardContainer";
import FooterContainer from "../components/Footer/FooterContainer";

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
                onclick={() => naviagte("")}
                icon={<IoAirplaneSharp style={{ fontSize: "18px" }} />}
                padding="8px 16px"
                fontSize="13px"
              />
              <ButtonComponent
                text="Plane a Trip"
                onclick={() => naviagte("")}
                icon={<HiSearch style={{ fontSize: "18px" }} />}
                padding="8px 16px"
                fontSize="13px"
              />
            </ButtonContainer>
          </JourneyCardLeft>
          <img
            className="image"
            src="https://www.pngitem.com/pimgs/m/171-1713706_transparent-girl-sitting-png-girl-with-travel-bag.png"
            alt=""
            width="50%"
            style={{ objectFit: "cover" }}
          />
        </JourneyBodyContainer>
        <JourneyCardContainer>
          <JourneyCard
            options="Location"
            seleted="United States"
            icon={<IoLocationOutline />}
          />
          <JourneyCard
            options="Check In Date"
            seleted="23/4/2023"
            icon={<IoAirplaneSharp />}
          />
          <JourneyCard
            options="Check Out Date"
            seleted="23/4/2023"
            icon={<IoAirplaneSharp />}
          />
          <JourneyCard
            options="Budget"
            seleted="$23000"
            icon={<MdMonetizationOn />}
          />
        </JourneyCardContainer>
        <BodyContainer
          heading="Lets Explore Your Destination"
          headingTwo=""
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=170667a&w=0&k=20&c=a5LdzykLqSgHBOxjxAXdgiULR8WjQ3zHEYH6Kan8SgU="
        />
        <DestinationCardContainer />
        <ServiceCardContaienr />
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
            onclick={() => naviagte("")}
            icon=""
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
        <BodyContainer
          heading="What's Clients Say About us"
          headingTwo=""
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
  tempora a ut vel minima. Voluptates magnam quos quasi, tempora obcaecati
  possimus perspiciatis eligendi ipsum dignissimos amet! Omnis perspiciatis
  obcaecati perspiciatis eligendi ipsum dignissimos amet! Omnis."
          image="https://www.tourradar.com/days-to-come/wp-content/uploads/2019/04/Quotes8.jpg"
        />
        <AboutCardContainer />
        <SeeMore>
          <ButtonComponent
            text="See More"
            onclick={() => naviagte("")}
            icon=""
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
      </Wrapper>
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </>
  );
};

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
  @media (max-width: 400px) {
    .image {
      width: 100%;
    }
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
