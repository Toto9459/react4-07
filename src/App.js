import './font.css';
import './reset.css';
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import HomePage from './components/Homepage';
import ContactPage from './components/ContactPage';
import Projects from './components/Projects';
import {secondColor, primaryLightColor, primaryColor, secondLightColor, thirdLightColor, thirdColor} from './components/Common';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media (min-width: 1400px) {
      font-size: 80%;
    }
    @media (max-width: 1100px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }

  body {
    background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  }

  ::-moz-selection {
    background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
    text-shadow: none;
  }
  ::selection {
      background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
      text-shadow: none;
  }
  ::-webkit-scrollbar{
      width: 10px;
      border-left: 2px solid ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }
  ::-webkit-scrollbar-thumb{
      background-color: ${props => props.isLight === true ? secondLightColor : secondColor};
      border-radius: 15px;
  }
`





function App() {

  const [openMenu, setOpenMenu] = useState(false)
  const [lightMode, setlightMode] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [openHome, setOpenHome] = useState(true)

  return (
    <div className="App" style={{display: "flex",justifyContent: "flex-end"}}>
      <GlobalStyle isLight={lightMode} />
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenHome={setOpenHome} openHome={openHome}/>
      <BrowserRouter>
        <Navbar 
          setOpenMenu={setOpenMenu} 
          openMenu={openMenu} 
          setlightMode={setlightMode} 
          lightMode={lightMode} 
          setOpenContact={setOpenContact} 
          openContact={openContact}
          setOpenHome={setOpenHome} 
          openHome={openHome}
        />
        <Routes>
          <Route path="/" element={ <HomePage setlightMode={setlightMode} lightMode={lightMode}/>} />
          <Route path="contact" element={<ContactPage setlightMode={setlightMode} lightMode={lightMode}/>} />
        </Routes>
        
      </BrowserRouter>

      <Projects />
      {/* {openContact && <ContactPage setlightMode={setlightMode} lightMode={lightMode}/>} */}

    </div>
  );
}

export default App;
