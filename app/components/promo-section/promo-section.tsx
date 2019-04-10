import React from 'react';
import Colors from 'app/components/colors/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PromoSection = () => (
  <section className="promo-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 xs-padding">
          <div className="promo_content text-center">
            <div className="icon">
              <FontAwesomeIcon icon={['fas', 'ban']} size="2x" />
            </div>
            <h3>No Ads experience</h3>
            <p>Stream music for as long as you want without interruptions.</p>
          </div>
        </div>
        <div className="col-md-4 xs-padding">
          <div className="promo_content text-center">
            <div className="icon">
              <FontAwesomeIcon icon={['fas', 'list-ul']} size="2x" />
            </div>
            <h3>Create Playlists</h3>
            <p>Access and manage all of your favorite music videos.</p>
          </div>
        </div>
        <div className="col-md-4 xs-padding">
          <div className="promo_content text-center">
            <div className="icon">
              <FontAwesomeIcon icon={['fas', 'coins']} size="2x" />
            </div>
            <h3>Tip your favorite videos</h3>
            <p>Give visibility to the music you like.</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .promo-section {
        padding: 45px 0;
        background: white;
        display: block;
        position: relative;
      }
      @media (min-width: 992px) {
        .container {
          max-width: 960px;
        }
      }

      @media (min-width: 576px) {
        .container {
          max-width: 540px;
        }
      }
      .col-md-4 {
        width: 100%;
        padding: 0px 20px;
      }
      @media (min-width: 768px) {
        .container {
          max-width: 800px;
        }
        .col-md-4 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0px;
        }
      }
      .container {
        width: 100%;
        margin: 0 auto;
      }
      .row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .text-center {
        text-align: center !important;
      }
      .promo_content h3 {
        font-size: 15px;
        margin-bottom: 0;
        font-weight: 600;
        letter-spacing: 1px;
      }
      p {
        font-size: 14px;
        margin-bottom: 15px;
        letter-spacing: 1px;
        line-height: 1.5;
        margin-top: 20px;
      }
      .icon {
        color: ${Colors.brandBlue};
        margin-bottom: 10px;
      }
    `}</style>
  </section>
);

export default PromoSection;
