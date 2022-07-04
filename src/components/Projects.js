import React from 'react'
import styled from 'styled-components';
import {secondColor, thirdColor, LinksA} from './Common';


const ProjectsContainer = styled.header`
  position: fixed;
  height: auto;
  width: auto;
  top: 3rem;
  right: 3rem;
  &:hover {
        background-color: ${thirdColor};
  }
`

const WorkA = styled(LinksA)`
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translate(-50%, 50%);
`



const WorkBtn = styled.button`
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${secondColor};
    transition: all .7s ease-out;
    @media (max-width: 850px) {
        display: none;
    }
`


function Projects() {
  return (
    <ProjectsContainer>
        <WorkBtn>
          <WorkA>Work</WorkA>
        </WorkBtn>
    </ProjectsContainer>
  )
}

export default Projects