import React from 'react';
import Home from 'app/components/home/home';
import Body from 'app/components/body/body';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAndroid } from '@fortawesome/free-brands-svg-icons/faAndroid';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faListUl } from '@fortawesome/free-solid-svg-icons/faListUl';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

library.add(
  faAndroid,
  faApple,
  faTwitter,
  faInstagram,
  faMedium,
  faAngellist,
  faFacebook,
  faBan,
  faListUl,
  faCoins,
  faTimes
);

export default class extends React.PureComponent {
  componentDidMount() {
    console.log('env: ', process.env.SKYHITZ_ENV);
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js', { scope: '/' })
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }
  render() {
    return (
      <Body>
        <Home />
      </Body>
    );
  }
}
