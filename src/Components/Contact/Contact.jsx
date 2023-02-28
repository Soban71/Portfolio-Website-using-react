import React, { useState } from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function () {
    const form = useRef();
    const [done, setDone] =useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kq8jitc', 'template_zs7om3y', form.current, 'lmHp6kZmId9ICqDuC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
   
   <>
   <section id='contacts'>
<div className="row">
    
        <div className='col-lg-6 contactLeft'>
     <span>Get in touch </span>
     <span>Contact me</span>
     </div> 
   

    
        <div className='col-lg-6 contactRight'>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user-name' className="user" id='user1' placeholder='Name'/>
        <br />
        <br></br>
        <input type="email" name='user-email' className="user" placeholder='Email'/>
        <br />
        <br></br>
        <textarea name="message"  className="user"  placeholder='Message'></textarea>
        <br />
        <br></br>
        <button type='submit'  className='button' id='c-button'>Send</button>
        <br /><br />
        <span>{done && "Thanks for contacting" }</span>
        <div className='blur c-blur1'
         style={{background : "var(--purple)"}}> 
        </div>
            </form>
            </div>
    </div>






   </section>
   </>
    
  )
}


{/*

 */}