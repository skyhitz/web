import { Component } from 'react';

class HeaderSection extends Component {
  render() {
    return (
      <section className='promo-section'>
        <div className='container'>
          <div className='section-heading'>
            <h2>Empower creators</h2>
            <p>Help us transform the music industry for $3.99/month.</p>
          </div>
        </div>
        <style jsx>{`
          .promo-section {
            padding: 45px 0;
            background: white;
            display: block;
            position: relative;
          }
          h2 {
            font-family: Raleway;
            font-weight: 600;
            font-size: 20px;
            color: black;
            text-align: center;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin: 15px auto;
          }

          p {
            font-family: Raleway;
            font-weight: 300;
            font-size: 14px;
            color: black;
            text-align: center;
            letter-spacing: 2px;
            margin: 15px auto;
          }

          @media (min-width: 576px) {
            .container {
              max-width: 540px;
            }
          }

          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }

          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }

          .container {
            position: relative;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </section>
    );
  }
}

export default HeaderSection;
