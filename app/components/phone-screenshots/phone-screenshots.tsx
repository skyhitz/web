import React from 'react';

const PhoneScreenShots = () => (
  <div className='screen'>
    <img
      className='android'
      src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_220/v1512668560/web/androidscreenweb_d8zpxh.png'
      alt='android'
    />
    <img
      className='phone'
      src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_198/v1512621179/web/iphonescreenweb_h1p6gc.png'
      alt='iphone'
    />
    <style jsx>{`
      .android {
        position: absolute;
        right: 30%;
        top: 0px;
        width: 41%;
      }
      .phone {
        position: absolute;
        right: 50%;
        top: 44px;
        width: 35%;
      }
      @media (min-width: 850px) {
        .android {
          width: 61%;
          right: 0px;
        }
        .phone {
          width: 55%;
          right: 124px;
        }
      }
      .screen {
        position: relative;
        margin: 25px auto;
      }
    `}</style>
  </div>
);

export default PhoneScreenShots;
