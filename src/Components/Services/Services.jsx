import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Card from '../Card/Card'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from  "./SOBAN CV.docx"
import {motion} from "framer-motion"
export default function Services() {
  return (
    <div id='Services'>

        <div className='Awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores vero 
            <br />
            aspernatur? Incidunt, architecto ipsa.
        </span>
        <a href={Resume} download>
    <button className='button s-button'>Download Cv</button>
    </a>
    <div className='blur s-blur1' style={{background : "#ABF1FF94"}}> </div>
        </div>




<div className='Cards'>
<motion.div
initial= {{left: "25rem"}}
whileInView={{left: "14rem"}}

transition={{duration : 2 , type: 'spring'}}
className='Cards'>

    <Card
    emoji={HeartEmoji}
    heading= {'Frontend'}
    Detail={'Html , Css , Bootstrap , Javascript , React'}
    />
</motion.div>
<motion.div
initial= {{left: "-15rem"}}
whileInView={{left: "-4rem"}}
transition={{duration : 2  , type: 'spring'}}
style={{top: "14rem"}}
>
    <Card
    emoji={Glasses}
    heading= {'Backend'}
    Detail={'Php , Nodejs (Express) , Mysql , Mongodb'}
    />
</motion.div>
<motion.div
initial= {{left: "25rem" }}
whileInView={{left: "14rem" }}
transition={{duration : 2  , type: 'spring'}}
style={{ top:"19rem"}}>

    <Card
    emoji={Humble}
    heading= {'Ado.Net'}
    Detail={'Ado.Net Desktop Application Developer and Designer'}
    />
</motion.div>
<div className='blur s-blur2' style={{background: '#ABF1FF94'}}></div>
</div>
    </div>
  )
}
