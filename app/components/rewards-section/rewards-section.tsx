import React from 'react';
import RewardsScreenshot from 'app/components/rewards-screenshot/rewards-screenshot';
import Colors from 'app/components/colors/colors';
import CheckoutModal from '../checkout-modal/checkout-modal';

const RewardsSection = () => (
  <div className="wrapper">
    <div className="screens-column">
      <RewardsScreenshot />
    </div>
    <div className="info-column">
      <h2 className="title">Directly reward music and artists you love.</h2>
      <p className="description">
        We believe in compensating creators for the value they provide. That's
        why your $6.99/month supports the music you connect with most. The more
        creations you support, the more you will gain reputation in our
        community.
      </p>
      <CheckoutModal />
    </div>

    <style jsx>{`
      .icons-wrap {
        display: inline-block;
        width: 50px;
      }
      .icon {
        top: 4px;
        position: relative;
        margin-left: 5px;
        display: inline-block;
      }
      .wrapper {
        margin: 0px auto;
        width: 80%;
        position: relative;
        display: table;
        color: white;
        font-family: Raleway;
        padding-top: 35px;
        max-width: 800px;
        height: 560px;
      }
      .btn-wrap {
        margin: 0 auto;
        width: auto;
        text-align: center;
        cursor: pointer;
      }
      .btn {
        border: 1px solid ${Colors.brandBlue};
        width: 180px;
        background: #1eaeff;
        border-radius: 30px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 30px auto;
        font-size: 12px;
        letter-spacing: 2px;
        cursor: pointer;
      }
      .glow {
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
      }
      .glow:hover,
      .hvr-glow:focus,
      .hvr-glow:active {
        box-shadow: 0 0 40px rgba(30, 174, 255, 0.86);
      }
      a {
        color: white;
      }
      .info-column {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        padding-bottom: 20px;
      }
      .screens-column {
        display: inline-block;
        vertical-align: top;
        width: 100%;
      }
      .title {
        font-family: Raleway;
        font-weight: 400;
        font-size: 24px;
        color: white;
        text-align: center;
        max-width: 415px;
        margin: 0 auto;
      }
      .description {
        font-family: Raleway;
        font-weight: 300;
        font-size: 14px;
        color: white;
        letter-spacing: 1px;
        max-width: 415px;
        margin: 35px auto 15px auto;
        line-height: 1.5;
      }

      @media (max-width: 420px) {
        .title {
          font-size: 20px;
        }
        .description {
          font-size: 12px;
        }
      }

      @media (min-width: 850px) {
        .title {
          font-size: 40px;
          font-weight: 400;
        }
        .screens-column {
          width: 50%;
        }
        .info-column {
          width: 50%;
          padding-top: 80px;
        }
      }
    `}</style>
  </div>
);

export default RewardsSection;
