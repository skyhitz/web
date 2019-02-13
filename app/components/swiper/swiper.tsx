import React from 'react';
import ReactDOM from 'react-dom';
import './swiper.scss';

interface Props {
  options: any;
}

class ReactSwiper extends React.Component<Props> {
  swiper: any;

  componentDidMount() {
    let { options } = this.props;
    const Swiper = require('swiper');
    this.swiper = new Swiper(ReactDOM.findDOMNode(this), options);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.swiper.update();

    if (Number.isInteger(nextProps.activeIndex)) {
      this.swiper.slideTo(nextProps.activeIndex);
    }

    return true;
  }
  render() {
    let { options, children, ...other } = this.props;
    return (
      <div className='swiper-container' {...other}>
        <div className='swiper-wrapper'>
          {React.Children.map(children, child => (
            <div className='swiper-slide'>{child}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactSwiper;
