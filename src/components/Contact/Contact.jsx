import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';



const Contact = () => {

    const [done, setDone] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2obi97n', 'template_90ehgt1', form.current, 'eSZ0R9WiEBDegqzIH')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }} ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message"  className='user' placeholder='Message' ></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur" style={{ background: "var(--purple)" }}>

                </div>
            </form>
        </div>
    </div>
  )
};

export default Contact;