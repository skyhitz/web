import React from 'react';
import ReactSwiper from 'app/components/swiper/swiper';
import LazyLoad from 'react-lazyload';

class ScreenshotsCarousel extends React.Component {
  render() {
    let options = {
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
        rotate: 0,
        stretch: 90,
        depth: 200,
        modifier: 1,
        slideShadows: true
      }
    };
    return (
      <section className='screenshots-carousel'>
        <div className='container'>
          <div className='screen-wrap'>
            <LazyLoad height={534}>
              <ReactSwiper options={options}>
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735784/web/35049668_10160461733205313_7096240980445102080_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735785/web/34728574_10160461732420313_3753912278399844352_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735785/web/34723669_10160461732655313_8482772817207623680_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735785/web/34881876_10160461732835313_2718135572999700480_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735785/web/34779970_10160461732580313_4444142062924726272_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735784/web/34728309_10160461733120313_686459400239448064_n.jpg'
                  alt='skyhitz logo'
                />
                <img
                  className='screenshot'
                  src='https://res.cloudinary.com/skyhitz/image/upload/c_scale,q_auto,w_300/v1530735784/web/34859358_10160461733325313_2544391230909841408_n.jpg'
                  alt='skyhitz logo'
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
