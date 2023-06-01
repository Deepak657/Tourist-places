import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonComponent from "../Buttons/ButtonComponent";
import Logo from "../GlobalComponent/Logo";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <NavbarContainer>
      <Navbar toggle={toggle}>
        <Logo color="rgb(11,151,252)" fontSize="40px" />
        <NavLink to="/Tourist-places">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/resevations">Resevations</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/aboutus">About us</NavLink>
        <NavLink to="/contactus">Contact us</NavLink>
      </Navbar>
      <ButtonContainer toggle={toggle}>
        <ButtonComponent
          text="Log in"
          onClick={() => navigate("/login")}
          icon=""
          padding="8px 16px"
          fontSize="13px"
        />
        <ButtonComponent
          text="sign up"
          onClick={() => navigate("/signup")}
          icon=""
          padding="8px 16px"
          fontSize="13px"
        />
      </ButtonContainer>

      {toggle ? (
        <AiOutlineClose
          className="close"
          onClick={() => setToggle(!toggle)}
          style={{
            position: "absolute",
            right: "20px",
            fontSize: "35px",
            color: "rgb(11,151,252)",
          }}
        />
      ) : (
        <HiMenu
          className="menu"
          onClick={() => setToggle(!toggle)}
          style={{
            position: "absolute",
            right: "20px",
            fontSize: "35px",
            color: "rgb(11,151,252)",
          }}
        />
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: rgb(247, 247, 247);
  @media (min-width: 1080px) {
    .menu,
    .close {
      display: none;
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
const Navbar = styled.nav<{ toggle: boolean }>`
  display: flex;
  gap: 70px;
  align-items: center;
  a {
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 700;
    color: #000;
  }
  a.active {
    color: ${({ theme }) => theme.colors.heading};
  }
  @media (max-width: 1080px) {
    a {
      display: none;
      display: ${({ toggle }) => (toggle ? "block" : "none")};
    }
    flex-direction: column;
    gap: 30px;
  }
`;
const ButtonContainer = styled.div<{ toggle: boolean }>`
  display: flex;
  gap: 20px;
  @media (max-width: 1080px) {
    display: none;
    margin: 20px 0;
    display: ${({ toggle }) => (toggle ? "flex" : "none")};
  }
`;

export default NavbarComponent;
