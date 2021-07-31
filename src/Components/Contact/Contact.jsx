import React, { useState } from 'react';
import './contact_style.css'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [code, setCode] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xs8k1oe', 'template_j85sg8q', e.target, 'user_pS3LOqEbklnwR0nj3rCdv')
            .then((result) => {
                setCode(true);
            }, (error) => {
                setCode(false);
            });
    };

    return (
        <>
            <div className='contact_info'>
                <div className='email_div'>
                    <h3>Email ID</h3>
                    <p>Akshaykc@gmail.com</p>
                </div>
                <div className='contact_div'>
                    <h3>Mobile</h3>
                    <p>+91-8209180574</p>
                </div>
                <div className='address_div'>
                    <h3>Address</h3>
                    <p>Karni Nagar <br /> Jodhpur, Rajasthan, India</p>
                </div>
            </div>

            <div className='contact_form'>
                <div className='form_div'>
                    <h2>Get in touch</h2>
                    <form action='/' method='POST' className='form' onSubmit={sendEmail}>
                        <input type='text' name='fname' placeholder='Enter your Name' required />
                        <input type='email' name='email' placeholder='Enter your Email ID' required />
                        <input type='text' name='mobile' placeholder='Enter your Mobile Number' required />
                        <textarea name='message' cols='30' rows='10' placeholder='Message' required></textarea>
                        <button type='submit'>Submit</button>
                        <div className={code ? 'showRes' : 'hideRes'}>
                            <span className={code ? 'success' : 'failed'}>{code ? 'Message Sent' : 'Error'}</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;