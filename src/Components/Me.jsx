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

export default Me;
