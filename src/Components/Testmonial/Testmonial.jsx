import React from 'react'
import './Testmonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
import profilepic1 from "../../img/profile1.jpg"
import profilepic2 from "../../img/profile2.jpg"
import profilepic3 from "../../img/profile3.jpg"
import profilepic4 from "../../img/profile4.jpg"
import profilepic5 from "../../img/profile5.jpg"
import profilepic6 from "../../img/profile6.jpg"


export default function Testmonial() {
  const client=[
    {
        img: profilepic1,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },
    {
        img: profilepic2,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },
    {
        img: profilepic3,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },
    {
        img: profilepic4,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },
    {
        img: profilepic5,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },  {
        img: profilepic6,
        Review: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Facere illo aperiam culpa cupiditate in voluptate?",
    },
  ]
    return (
    
    
        <div className='t-wrapper' id='Testimonials'>
            <div className='t-heading'>
                <span>Client Always get </span>
                <span>Exceptional Work </span>
                <span>From me.....</span>
                <div className='blur t-blur1' style={{background : "var(--purple)"}}> </div>
                <div className='blur t-blur2' style={{background : "skyblue"}}> </div>
            </div>

            {/*Swiper*/}
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable: "true"}}
>

{client.map((client,index)=>{

    return(
        <SwiperSlide key={index}>
            <div className='testmonial testmonial2'>
          <img src={client.img} alt="" />
          <span>{client.Review}</span>
          </div>
        </SwiperSlide>
    )
})}
</Swiper>

        </div>
  
  )
}
