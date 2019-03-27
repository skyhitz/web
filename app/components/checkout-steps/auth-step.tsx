import React from 'react';
import './auth-step.scss';
import EmailAuthForm from '../email-auth-form/email-auth-form';
import { inject } from 'mobx-react';

@inject((stores: any) => ({
  signInWithFacebook: stores.sessionStore.signInWithFacebook.bind(
    stores.sessionStore
  )
}))
export class AuthStep extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      signInError: ''
    };
  }

  async handleResponse(response) {
    let user = await this.props.signInWithFacebook(response.accessToken);
    if (!user.id) {
      this.setState({
        signInError:
          'Looks like you do not have an account. Sign up through our mobile app.'
      });
    }
  }

  render() {
    return (
      <div className="auth-step-container">
        <EmailAuthForm />
      </div>
    );
  }
}
