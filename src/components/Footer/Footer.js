import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer-container'>
             <ul className='ul-container'>
                <a>Level-5, 34, Agargaw, Gulshan, Dhaka</a>
                <br />
                <a>Official: nasirahmed8202@gail.com</a>
                <br />
                <a>Helpline : 01322810867 , 01322810873 </a>
                <br />
                <a>01322810869 , 01322901104</a>
                <br/>
                <a>Available : Sat - Thu, 10:00 AM to 7:00 PM</a>
             </ul>
             <ul className='ul-container2'>
                <a>About</a>
                <br />
                <a>Success</a>
                <br />
                <a>Donate</a>
                <br />
                <a>Blog</a>
                <br />
                <a>Privacy policy</a>
        </ul>
        <br />
        
        </div>
        <p><small>Copyright &copy; Design by Md. Nasir Ahmed 2022</small></p>

        </>
    );
};

export default Footer;