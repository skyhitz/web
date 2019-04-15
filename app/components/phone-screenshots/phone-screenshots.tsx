import React from 'react';

const PhoneScreenShots = () => (
  <div className="screen">
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
