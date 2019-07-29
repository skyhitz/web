import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AppLink from '../app-link/app-link';

export default class AppButton extends React.Component {
  public render() {
    return (
      <div className="btn-wrap">
        <AppLink>
          <button>
            Get the app
            <div className="icons-wrap">
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'apple']} size="2x" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'android']} size="2x" />
              </div>
            </div>
          </button>
        </AppLink>
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
        `}</style>
      </div>
    );
  }
}
