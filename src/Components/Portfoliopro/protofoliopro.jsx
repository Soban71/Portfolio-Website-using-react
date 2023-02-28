import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react';
import './portfolio.css'
import slidebar from "../../img/sidebar.png"
import Ecomerce from "../../img/ecommerce.png"
import MusicApp from "../../img/musicapp.png";
import Hoc from "../../img/hoc.png"
import 'swiper/css'

export default function protofoliopro() {
  return (
    <div className='portfolio' id='projectsProtoFolio'>
        <span>Recent Project</span>
        <span>Protfolio</span>

<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'
>
    <SwiperSlide>
        <img src={slidebar} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={Ecomerce} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={MusicApp} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
        <img src={Hoc} alt="" />
    </SwiperSlide>
</Swiper>
    </div>
  )
}
