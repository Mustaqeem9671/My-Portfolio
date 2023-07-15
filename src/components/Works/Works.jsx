import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { motion } from 'framer-motion';



const Works = () => {
  return (
    <div className="works" >
      {/* left side */}
      <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum kdmf skmr ksjfdmf kffjd dolor sit amet consectetur
                <br />
                Lorem ipsum kdmf skmr ksjfdmf kffjd 
                <br />
                Lorem ipsum kdmf skmr ksjfdmf kffjd dolor sit amet consectetur
                <br />
                Lorem ipsum kdmf skmr ksjfdmf kffjd 
              </span>
              
              <button className="button s-button">Hire me</button>
             
              <div className="blur s-blur" style={{ background: "#ABF1FF94" }} ></div>
        </div>
        {/* right side */}
        <div className="w-right">

        <motion.div 
        initial={{rotate: 45 }}
        whileInView={{rotate:0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}

        className="w-mcircle">
          <div className="w-scircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-scircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-scircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-scircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-scircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* bg circles */}
        <div className="wbcircle blueCircle"></div>
        <div className="wbcircle yellowCircle"></div>

    </div>
    </div>
  )
};

export default Works;