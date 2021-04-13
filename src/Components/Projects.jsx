import React from "react";
import styled from "styled-components";
import wave from "../Assets/images/wave.svg";
import Linkedin from "../Assets/images/Linkedin.png";
import Instagram from "../Assets/images/instagramLogin.png";

const Projects = ({ projects }) => {
  return (
    <div ref={projects}>
      <WaveBlock></WaveBlock>
      <ProjectSection>
        <Project>
          <h1>EyeLearn</h1>

          <ProjectImg>
            <div></div>
          </ProjectImg>
        </Project>
        <Project>
          <h1>Linkedin</h1>
          <ProjectImg>
            <div>
              <img src={Linkedin} alt="" />
            </div>
          </ProjectImg>
        </Project>
        <Project>
          <h1>Instagram</h1>

          <ProjectImg>
            <div>
              <img src={Instagram} alt="" />
            </div>
          </ProjectImg>
        </Project>
      </ProjectSection>
    </div>
  );
};

const ProjectSection = styled.div`
  background-color: #e4003a;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const WaveBlock = styled.div`
  background-image: url(${wave});
  height: 14vw;

  background-size: cover;
  background-position: center;
`;

const Project = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  h1 {
    color: white;
    font-size: 4em;
    display: flex;
    flex-grow: 1;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

const ProjectImg = styled.div`
  display: flex;
  height: 20em;
  width: 40em;
  margin: 0 auto;

  /* flex-grow: 0.5; */

  justify-content: flex-end;

  div {
    cursor: pointer;
    width: 90%;
    height: 100%;
    background-color: #393e41;
    border-radius: 50px;
    display: flex;
    flex-grow: 1;
    transition: transform 0.3s, box-shadow 0.3s;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      border-radius: 50px;
      transition: opacity 0.3s;
      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      transform: translateY(-20px);
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
        0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    }

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export default Projects;
