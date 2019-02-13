import React from 'react';
import SocialLinks from '../social-links/social-links';
import Colors from 'app/components/colors/colors';

const Footer = () => (
  <footer className='footer fluid-width'>
    <SocialLinks />
    <div className='footer-nav-links float-right'>
      <a
        className='footer-nav-link hover-color js-ga-track'
        target='_blank'
        rel='noopener noreferrer'
        href='/terms-of-use'
      >
        Terms of Use
      </a>
      <a
        className='footer-nav-link hover-color js-ga-track'
        target='_blank'
        rel='noopener noreferrer'
        href='/privacy-policy'
      >
        Privacy Policy
      </a>
    </div>
    <style jsx>{`
      .footer {
        left: 0;
        right: 0;
        z-index: 45;
        -webkit-transform: translate3d(0px, 0px, 0px);
        font-family: 'Raleway';
        font-weight: 200;
        letter-spacing: 1.5px;
      }
      .fluid-width {
        height: 60px;
        width: 94%;
        max-width: 1400px;
        margin: 0 auto;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 20px;
      }
      .float-right {
        float: right;
      }
      .footer-nav-link {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        line-height: 32px;
        margin: 0 15px 0 0;
        float: left;
        transition: all 0.25s ease-in-out;
        -moz-transition: all 0.25s ease-in-out;
        -webkit-transition: all 0.25s ease-in-out;
      }
      .footer-nav-link:hover {
        color: ${Colors.brandBlue};
      }
    `}</style>
  </footer>
);

export default Footer;
