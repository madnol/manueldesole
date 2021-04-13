import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ projects, handlePorfolio }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarBlock>
      <Container>
        <Logo to="/">
          <h2>Manuel Desole</h2>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Nav isOpen={isOpen}>
          <NavLink>About</NavLink>
          <NavLink onClick={e => handlePorfolio(e)}>Portfolio</NavLink>
          <NavLink>Contacts</NavLink>
        </Nav>
      </Container>
    </NavbarBlock>
  );
};

const NavbarBlock = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  font-family: "roboto mono";
`;

const Nav = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100vw;

    align-items: center;
    max-height: ${({ isOpen }) => (isOpen ? "50vh" : "0")};
    transition: max-height 0.3s;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #393e41;
  font-weight: 700;
  display: inline-block;
  padding-left: 8vw;
  transition: all 0.2s ease-in;

  &:hover {
    color: #e4003a;
  }
  @media (max-width: 768px) {
    padding-bottom: 1em;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #e4003a;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  height: 1em;
  justify-content: space-between;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background-color: #393e41;
    transition: all 0.2s ease-in;
  }
  &:hover {
    span {
      background-color: #e4003a;
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
