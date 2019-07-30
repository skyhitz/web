import React from 'react';
import AppButton from 'app/components/app-button/app-button';

export default class MainWrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <h1 className="title">Earn crypto with music</h1>
          <h2 className="subtitle">
            Platform where artists can generate revenue from their music videos.
            Fans can discover, stream and upvote their favorite music without
            limits.
          </h2>
          <AppButton />
        </div>
        <style jsx>{`
          .wrapper {
            margin: 0px auto;
            width: 80%;
            position: relative;
            display: table;
            color: white;
            font-family: Raleway;
            padding-top: 70px;
            max-width: 800px;
            height: 560px;
          }
          .column {
            display: inline-block;
            vertical-align: top;
            width: 100%;
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
            .wrapper {
              height: 260px;
            }
            .column {
              width: 100%;
              padding-top: 30px;
            }
          }

          @media (max-width: 420px) {
            .title {
              font-size: 24px;
            }
            .subtitle {
              font-size: 14px;
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
              padding-top: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
}
