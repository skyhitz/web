import React from 'react';
import AppLink from '../app-link/app-link';
import AppButton from '../app-button/app-button';
import './confirmation-step.scss';

export class ConfirmationStep extends React.Component<any, any> {
  render() {
    return (
      <div className='confirmation-wrapper'>
        <h3 className='confirmation-title'>Thanks for subscribing!</h3>
        <p>
          <AppLink>
            Make sure to download our app and support your favorite music with
            your credits.
          </AppLink>
        </p>
        <AppButton />
      </div>
    );
  }
}
