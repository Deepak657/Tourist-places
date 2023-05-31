import React from "react";
import BodyContainer from "../components/BodyContainer";
import DestinationCardContainer from "../components/DestinationCardContainer";
import FooterContainer from "../components/FooterContainer";
const Destination = () => {
  return (
    <>
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
      <DestinationCardContainer />
      <DestinationCardContainer />
      <FooterContainer
        colorHeading="rgb(241, 241, 241)"
        colorLink="#dedede"
        fontSizeHeading="22px"
        fontSizeLink="14px"
      />
    </>
  );
};

export default Destination;