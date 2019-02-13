import React from 'react';

const RewardsScreenshot = () => (
  <div className='screen'>
    <img
      className='phone'
      src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_198/v1512621179/web/iphonescreenweb_h1p6gc.png'
      alt='iphone'
    />
    <style jsx>{`
      .phone {
        top: 44px;
        max-width: 198px;
        margin: 0 auto;
        display: block;
      }
      @media (min-width: 850px) {
        .phone {
          right: 0px;
        }
      }
      .screen {
        position: relative;
        margin: 25px auto;
      }
    `}</style>
  </div>
);

export default RewardsScreenshot;
