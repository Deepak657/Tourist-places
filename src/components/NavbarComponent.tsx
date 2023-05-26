import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <Navbar>
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/479/346/non_2x/modern-minimalist-flying-plane-logo-or-icon-free-vector.jpg"
          alt=""
          width="50px"
          height="50px"
          style={{ objectFit: "cover" }}
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/resevations">Resevations</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/aboutus">About us</NavLink>
        <NavLink to="/contactus">Contact us</NavLink>
      </Navbar>
      <FormContainer>
        <ButtonComponent text="Log in" onclick={() => navigate("/login")} />
        <ButtonComponent text="sign up" onclick={() => navigate("/signup")} />
      </FormContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navbar = styled.nav`
  display: flex;
  gap: 80px;
  align-items: center;
  a {
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 700;
    color: #000;
  }
  a.active {
    color: rgb(27, 124, 228);
  }
`;
const FormContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export default NavbarComponent;
