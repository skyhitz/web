import React from 'react';
import AppButton from '../app-button/app-button';
import './confirmation-step.scss';

export class ConfirmationStep extends React.Component<any, any> {
  render() {
    return (
      <div className="confirmation-wrapper">
        <h3 className="confirmation-title">Thanks for subscribing!</h3>
        <p>
          Make sure to download our app. Start flipping music videos with your
          credits.
        </p>
        <AppButton />
      </div>
    );
  }
}
