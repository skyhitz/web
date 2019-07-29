import React from 'react';
import ReactSwiper from 'app/components/swiper/swiper';
import LazyLoad from 'react-lazyload';

class ScreenshotsCarousel extends React.Component {
  render() {
    const options = {
      mode: 'horizontal',
      loop: true,
      speed: 1000,
      autoplay: 0,
      effect: 'coverflow',
      slidesPerView: 3,
      grabCursor: true,
      pagination: '.screen-pagination',
      paginationClickable: true,
      nextButton: '.arrow-right',
      prevButton: '.arrow-left',
      keyboardControl: true,
      coverflow: {
        depth: 200,
        modifier: 1,
        rotate: 0,
        slideShadows: true,
        stretch: 90,
      },
    };
    return (
      <section className="screenshots-carousel">
        <div className="container">
          <div className="screen-wrap">
            <LazyLoad height={534}>
              <ReactSwiper options={options}>
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.13.48.png"
                  alt="skyhitz logo"
                />
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.19.52.png"
                  alt="skyhitz logo"
                />
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.20.07.png"
                  alt="skyhitz logo"
                />
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.20.12.png"
                  alt="skyhitz logo"
                />
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.20.02.png"
                  alt="skyhitz logo"
                />
                <img
                  className="screenshot"
                  src="https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1563906313/web/Simulator_Screen_Shot_-_iPhone_X%CA%80_-_2019-07-23_at_13.17.20.png"
                  alt="skyhitz logo"
                />
              </ReactSwiper>
            </LazyLoad>
          </div>
        </div>
        <style jsx>{`
          .screen-wrap {
            width: 900px;
            margin: 0 auto;
          }
          @media (max-width: 992px) {
            .screen-wrap {
              width: 650px;
            }
          }
          @media (max-width: 767px) {
            .screen-wrap {
              width: 95%;
            }
          }
          .screenshot {
            max-width: 100%;
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

          .screenshots-carousel {
            margin-bottom: 40px;
            margin-top: 40px;
          }
        `}</style>
      </section>
    );
  }
}

export default ScreenshotsCarousel;
