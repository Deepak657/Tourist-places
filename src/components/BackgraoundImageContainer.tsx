import React from "react";
import { BackgroundImage } from "../components/Form";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/CardHeading";
import { Content } from "../components/ParagraphComponent";

interface Iprops {
  img: string;
  title: string;
}
const BackgraoundImageContainer = ({ img, title }: Iprops) => {
  const navigate = useNavigate();

  return (
    <div>
      <BackgroundImage
        url={img}
        height="600px"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Heading
          style={{
            fontSize: "50px",
            color: "#fff",
            textAlign: "center",
            width: "460px",
            marginBottom: "50px",
          }}
        >
          {title}
        </Heading>
        <Content
          style={{
            maxWidth: "700px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "120px",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          consectetur ducimus doloribus alias remgtheryh temporibus.sit amet
          consectetur adipisicing elit. Deserunt consectetur ducimus doloribus
          alias remgtheryh temporibus
        </Content>
        <ButtonComponent
          text="See More"
          onclick={() => navigate("")}
          icon=""
          padding="12px 100px"
          fontSize="18px"
        />
      </BackgroundImage>
    </div>
  );
};

export default BackgraoundImageContainer;
