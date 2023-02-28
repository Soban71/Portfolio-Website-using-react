import React from 'react'
import "./Intro.css";
import  Github from '../../img/github.png';
import  Linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from  "../../img/boy.png"
import ownPic from '../../img/Ownpic.png'
import glassimjoi from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'



export default function Intro() {
  const transition={duration: 5, type: 'spring'}
  return (
    <div className='intro'>

      <div className='i-left'> 
         <div className='i-name'>
         <span>Hy! I Am</span>        
         <span>Muhammad Soban</span>    
         <span>
            frontend Developer with high level of experience in web designing and
            Development , Producting the Quality work
         </span>
         </div>
         <button className='button i-button'>
           Hire Me
         </button>
         <div className='i-icons'>
            <img src={Github} alt="" />
            <img src={Linkedin} alt="" />
            <img src={instagram} alt="" />
           
         </div>
      </div>



      <div className='i-right'> 
         <img src={vector1} alt="" />
         <img src={vector2} alt="" />
         <img src={ownPic} alt="" />
         <motion.img
         initial={{left: '30%'}}
         whileInView={{left : '45%'}}
         transition={transition}
         src={glassimjoi} />
         <div>
            </div>
      </div>


    </div>
  )
}
