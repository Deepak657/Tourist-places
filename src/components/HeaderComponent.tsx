import React from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <div>
        <h1>Let Starts Your Beautiful Journey With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          laudantium iusto voluptas magni, illo culpa. Cumque, ullam voluptatum.
          Id maxime voluptate beatae quaerat minima.
        </p>
        <div>
          <ButtonComponent text="Plane a Trip" onclick={() => navigate("")} />
          <ButtonComponent text="Plane a Trip" onclick={() => navigate("")} />
        </div>
      </div>
      <img src="" alt="" />
    </Header>
  );
};

const Header = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
`;

export default HeaderComponent;
