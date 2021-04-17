import React from "react";
import styled from "styled-components";
import Img from "../Assets/images/ManuelDesoleprofile.png";
import "../style/style.css";
const Me = ({ aboutMe }) => {
  return (
    <Container ref={aboutMe}>
      <HeadLine>
        <h1>
          Hello there! <div className="shake-lr">👋</div> <br />
          I'm a MERN stack developer
        </h1>
        <Button>HOW CAN I HELP</Button>
      </HeadLine>
      <ImageContainer>
        <Image></Image>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  width: 80%;
  margin: 2em auto;
  padding-top: 7em;
  margin-bottom: 0;

  @media (max-width: 768px) {
    padding: 1em;
    justify-content: center;
    padding-top: 7em;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Image = styled.div`
  width: 30vw;
  height: 30vw;
  border-radius: 100%;
  background-color: #e4003a;
  background-image: url(${Img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 0.02em;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const HeadLine = styled.div`
  width: 400px;
  margin: 2em 0;
  display: flex;
  font-family: "roboto mono";
  font-weight: 700;
  flex-direction: column;
  flex-grow: 5;
  h1 {
    margin-bottom: 0.5em;
  }
  @media (max-width: 768px) {
    h1 {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 1em;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: #e4003a;
  transform: translateX(-4px);
  color: white;
  width: 12em;
  font-family: khula;
  border-radius: 50px;
  font-weight: 600;
  padding: 1em;
  box-shadow: 0 2.8px 2.2px rgba(255, 0, 64, 0.02),
    0 6.7px 5.3px rgba(255, 0, 64, 0.028), 0 12.5px 10px rgba(255, 0, 64, 0.035),
    0 22.3px 17.9px rgba(255, 0, 64, 0.042),
    0 41.8px 33.4px rgba(255, 0, 64, 0.05), 0 100px 80px rgba(255, 0, 64, 0.07);
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgb(255, 0, 64);
    box-shadow: 0 2.8px 2.2px rgba(255, 0, 64, 0.25),
      0 6.7px 5.3px rgba(255, 0, 64, 0.033),
      0 12.5px 10px rgba(255, 0, 64, 0.04),
      0 22.3px 17.9px rgba(255, 0, 64, 0.047),
      0 41.8px 33.4px rgba(255, 0, 64, 0.1), 0 100px 80px rgba(255, 0, 64, 0.12);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export default Me;
