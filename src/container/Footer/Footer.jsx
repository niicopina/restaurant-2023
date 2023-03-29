import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { FooterOverlay, Newsletter} from '../../components'
import {images} from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Av. Siempreviva 123, EU</p>
        <p className='p__opensans'>+54 011 1234 5678</p>
        <p className='p__opensans'>+54 011 8765 4321</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footerlogo" />
        <p className='p__opensans'>"The best way to find yourself 
                is to lose yourself in the service of others</p>
                <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: '15px'}}/>
                <div className="app__footer-links_icons">
                  <FiFacebook/>
                  <FiTwitter />
                  <FiInstagram />
                </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday - Friday:</p>
          <p className='p__opensans'>10:00 am - 23:00 pm</p>
          <p className='p__opensans'>Saturday - Sunday:</p>
          <p className='p__opensans'>10:00 am - 02:00 am</p>
        </div>
    </div>

    <div className="footer__copyright">
      <p className='p__opensans'>2023 Gerích - All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
