


import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
  const transition = { duration: 1, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services' >
      {/* left side  */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Lorem ipsum kdmf skmr ksjfdmf kffjd
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: '14rem' }}
          initial={{ left: '25%' }}
          transition={transition}
          style={{ left: '14rem' }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          whileInView={{ top: '14rem', left: '-4rem' }}
          initial={{ top: '18rem', left: '2rem' }}
          transition={transition}
          style={{ top: '12rem', left: '-4rem' }}
        >
          <Card
            emoji={Glasses}
            heading={"Developers"}
            detail={"Html, Css, JavaScript,Figma, ReactJS"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          whileInView={{ top: '19rem', left: '12rem' }}
          initial={{ top: '25rem', left: '12rem' }}
          transition={transition}
          style={{ top: '19rem', left: '12rem' }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"This was a wonderful experience in my journey"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;




