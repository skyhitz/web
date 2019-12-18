import React from 'react';
import CheckoutModal from '../checkout-modal/checkout-modal';

export default class MainWrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <h1 className="title">Buy and sell music videos</h1>
          <h2 className="subtitle">
            Decentralized video music market. Upload original content and
            monetize it online.
          </h2>
          <CheckoutModal />
        </div>
        <style jsx>{`
          .wrapper {
            margin: 0px auto;
            width: 80%;
            position: relative;
            display: table;
            color: white;
            font-family: Raleway;
            max-width: 800px;
            height: calc(100vh - 60px);
          }
          .column {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            padding-top: 18%;
          }
          .screens-column {
            display: inline-block;
            vertical-align: top;
            width: 100%;
          }
          .title {
            font-family: Raleway;
            font-weight: 400;
            font-size: 30px;
            color: white;
            text-align: center;
            max-width: 415px;
            margin: 0 auto;
          }
          .subtitle {
            font-family: Raleway;
            font-weight: 300;
            font-size: 14px;
            color: white;
            text-align: center;
            letter-spacing: 2px;
            max-width: 415px;
            margin: 15px auto 30px auto;
            line-height: 1.5;
          }

          @media (max-width: 849px) {
            .column {
              width: 100%;
              padding-top: 25%;
            }
          }

          @media (max-width: 420px) {
            .title {
              font-size: 38px;
              margin-top: 12%;
              margin-bottom: 12%;
            }
            .subtitle {
              font-size: 16px;
            }
          }

          @media (min-width: 850px) {
            .title {
              font-size: 65px;
              font-weight: 500;
              line-height: 1.25;
            }
            .subtitle {
              font-family: Raleway;
              font-weight: 400;
              font-size: 18px;
              color: white;
              text-align: center;
              letter-spacing: 2px;
            }
            .screens-column {
              width: 50%;
            }
            .column {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
