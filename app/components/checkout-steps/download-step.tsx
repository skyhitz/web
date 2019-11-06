import React from 'react';
import './auth-step.scss';
import AppLink from 'app/app-link/app-link';

export class DownloadStep extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth-step-container">
        <div className="ios-link">
          <AppLink>
            <img src="https://res.cloudinary.com/skyhitz/image/upload/v1572989299/web/ww_app-store-badge_150909.png" />
          </AppLink>
        </div>
        <div className="android-link">
          <AppLink android={true}>
            <img src="https://res.cloudinary.com/skyhitz/image/upload/v1572978315/web/google-play-store.png" />
          </AppLink>
        </div>
        <style jsx>{`
          .auth-step-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .android-link {
            width: 50%;
            align-items: center;
            justify-content: center;
            display: flex;
          }
          .ios-link {
            width: 50%;
            align-items: center;
            justify-content: center;
            display: flex;
          }
          .android-link img {
            max-width: 70%;
          }
          .ios-link img {
            max-width: 70%;
          }
        `}</style>
      </div>
    );
  }
}
