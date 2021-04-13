import React from "react";
import styled from "styled-components";
import wave from "../Assets/images/wave.svg";
const Projects = ({ projects }) => {
  return (
    <div ref={projects}>
      <WaveBlock></WaveBlock>
      <ProjectSection>
        <Project>
          <Text>
            <h1>EyeLearn</h1>
          </Text>
          <ProjectImg>
            <div></div>
          </ProjectImg>
        </Project>
      </ProjectSection>
    </div>
  );
};

const ProjectSection = styled.div`
  background-color: #e4003a;
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
`;

const Text = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: left;
  h1 {
    display: inline-block;
    color: white;
    font-size: 4em;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

const ProjectImg = styled.div`
  display: flex;

  justify-content: center;
  div {
    width: 500px;
    height: 300px;
    background-color: #393e41;
    border-radius: 50px;
  }
`;

export default Projects;
