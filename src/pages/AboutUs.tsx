import React from "react";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import SmartTravel from "../components/Cards/AboutUS/SmartTravel";
import { SeeMore, Wrapper } from "./Home";
import FooterContainer from "../components/Container/FooterContainer";
import BackgraoundImageContainer from "../components/Container/BackgraoundImageContainer";
import AboutContent from "../components/Contents/AboutContent";
import AboutContentListContainer from "../components/Container/AboutContentListContainer";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <BackgraoundImageContainer
          img="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg"
          title="About Us"
        />
        <SmartTravel
          title="Welcome to Smart Travel"
          img="https://t3.ftcdn.net/jpg/05/11/04/42/360_F_511044245_c107iUv7jdKHA6ZG4Tt8YlVO1F08j9YF.jpg"
          height="520px"
          order={1}
          component={<AboutContentListContainer />}
        />
        <SmartTravel
          title="Our Story"
          img="https://media.istockphoto.com/id/1084012252/photo/woman-photographer-with-dslr-camera.jpg?s=612x612&w=0&k=20&c=M60y3zxgbIhnezVIY8HEksGAlOmMEozVGSV8g58fScQ="
          height="400px"
          order={0}
          component={<AboutContent />}
        />
        <SmartTravel
          title="Our Mission"
          img="https://t3.ftcdn.net/jpg/01/59/46/90/360_F_159469052_D8mCK1kcssgVB3ZleELsxaIqyi8uUKMY.jpg"
          height="400px"
          order={1}
          component={<AboutContent />}
        />
        <SeeMore>
          <ButtonComponent
            text="See More"
            onClick={() => navigate("")}
            padding="10px 80px"
            fontSize="18px"
          />
        </SeeMore>
      </Wrapper>
      <FooterContainer />
    </>
  );
};

export default AboutUs;
