import { Provider } from 'mobx-react';
import React from 'react';
import {
  sessionStore,
  signUpValidationStore,
  signInValidationStore,
  resetPasswordValidationStore,
  updatePasswordValidationStore,
  usernameAndEmailValidationStore,
  paymentsStore,
} from '../../../skyhitz-common';

export default class Providers extends React.Component {
  render() {
    return (
      <Provider
        sessionStore={sessionStore}
        signUpValidationStore={signUpValidationStore}
        signInValidationStore={signInValidationStore}
        usernameAndEmailValidationStore={usernameAndEmailValidationStore}
        resetPasswordValidationStore={resetPasswordValidationStore}
        updatePasswordValidationStore={updatePasswordValidationStore}
        paymentsStore={paymentsStore}
      >
        {this.props.children}
      </Provider>
    );
  }
}
