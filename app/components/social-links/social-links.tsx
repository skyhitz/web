import React from 'react';
import Colors from 'app/components//colors/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => (
  <div className='float-right footer-social-links'>
    <div className='social-icon'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/skyhitzio'
        aria-label='Read more about Skyhitz on twitter'
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </div>
    <div className='social-icon'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://medium.com/solving-the-music-streaming-problem'
        aria-label='Read more about Skyhitz on medium'
      >
        <FontAwesomeIcon icon={['fab', 'medium']} />
      </a>
    </div>
    <div className='social-icon'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.facebook.com/skyhitzio'
        aria-label='Read more about Skyhitz on facebook'
      >
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
    </div>
    <div className='social-icon'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/skyhitz'
        aria-label='Read more about Skyhitz on instagram'
      >
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
    </div>
    <div className='social-icon'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://angel.co/skyhitz'
        aria-label='Read more about Skyhitz on angellist'
      >
        <FontAwesomeIcon icon={['fab', 'angellist']} />
      </a>
    </div>
    <style jsx>{`
      .float-right {
        float: right;
      }
      .icon {
        color: ${Colors.white};
      }
      .social-icon {
        font-size: 16px;
        margin-right: 10px;
        margin-top: 8px;
        display: inline-block;
      }
      .social-icon a {
        color: ${Colors.white};
        transition: all 0.25s ease-in-out;
        -moz-transition: all 0.25s ease-in-out;
        -webkit-transition: all 0.25s ease-in-out;
      }
      .social-icon a:hover {
        color: ${Colors.brandBlue};
      }
    `}</style>
  </div>
);

export default SocialLinks;
