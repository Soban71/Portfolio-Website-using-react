import React from 'react'
import upWork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import './Works.css'
import Amazon from '../../img/amazon.png'
import {motion} from "framer-motion"


export default function Works() {
  return (
    <div className='works'>
       
<div className='Awesome'>
<span>Works for All These</span>
        <span>Brands and Clients</span>
        
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
            <br />
            aspernatur? Incidunt, architecto ipsa.
            <br />
             Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        
    <button className='button s-button'>Hire Me</button>
    <div className='blur s-blur1' style={{background : "#ABF1FF94"}}> 
    
</div>

        </div>



        {/*Right side*/}
        <div className='w-right'>
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration : 3.5  , type: 'spring'}}
            className='w-mainCircle'>

                <div className='w-secCircle'>
                    <img src={upWork} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Fiver} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Amazon} alt="" />
                </div>

                <div className='w-secCircle'>
                    <img src={Shopify} alt="" />
                </div>
            </motion.div>
       

            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
   
    </div>
  )
}


{/* */}



        {/**  */}