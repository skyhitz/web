import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IOSLink from '../app-link/ios-link';
import AndroidLink from '../app-link/android-link';
import Colors from 'app/components/colors/colors';

export default class AppButton extends React.Component {
  public render() {
    return (
      <div className="btn-wrap">
        <button>
          Get the app
          <div className="icons-wrap">
            <IOSLink>
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'apple']} size="2x" />
              </div>
            </IOSLink>
            <AndroidLink>
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'android']} size="2x" />
              </div>
            </AndroidLink>
          </div>
        </button>
        <style jsx>{`
          .icons-wrap {
            display: inline-block;
            width: 70px;
          }
          .icon {
            top: 4px;
            position: relative;
            margin-left: 5px;
            display: inline-block;
          }
          .btn-wrap {
            margin: 35px auto 0 auto;
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
        `}</style>
      </div>
    );
  }
}
