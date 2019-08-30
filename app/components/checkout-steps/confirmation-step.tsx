import React from 'react';
import AndroidLink from '../app-link/android-link';
import IOSLink from '../app-link/ios-link';
import AppButton from '../app-button/app-button';
import './confirmation-step.scss';

export class ConfirmationStep extends React.Component<any, any> {
  render() {
    return (
      <div className="confirmation-wrapper">
        <h3 className="confirmation-title">Thanks for subscribing!</h3>
        <p>
          Make sure to download our app for <IOSLink>iOS</IOSLink> or{' '}
          <AndroidLink>Android</AndroidLink>. Support your favorite music with
          your credits.
        </p>
        <AppButton />
      </div>
    );
  }
}
