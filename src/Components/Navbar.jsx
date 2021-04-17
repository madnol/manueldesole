import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ projects, handlePorfolio, handleContacts, handleAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <NavbarBlock scroll={scrollY > 1 || isOpen === true}>
      <Container>
        <Logo to="/">
          <h2
            style={
              scrollY >= 750
                ? { color: "#f6f7eb" }
                : { color: "#e4003a", transition: "color .2s ease-in" }
            }
          >
            Manuel Desole
          </h2>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Nav isOpen={isOpen}>
          <NavLink scroll={scrollY >= 700} onClick={e => handleAbout(e)}>
            About
          </NavLink>
          <NavLink scroll={scrollY >= 700} onClick={e => handlePorfolio(e)}>
            Works
          </NavLink>
          <NavLink scroll={scrollY >= 700} onClick={e => handleContacts(e)}>
            Contacts
          </NavLink>
        </Nav>
      </Container>
    </NavbarBlock>
  );
};

const onScroll = css`
  background-color: rgba(246, 247, 235, 0.3);
  backdrop-filter: blur(1rem);
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);
`;

const color = css`
  color: white;
`;

const NavbarBlock = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out;
  ${props => props.scroll && onScroll};
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
  ${props => props.scroll && color};

  &:hover {
    color: #e4003a;
  }
  @media (max-width: 768px) {
    padding-bottom: 1em;
    transition: color 0.3s;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #e4003a;
  transition: color 0.3s;
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
