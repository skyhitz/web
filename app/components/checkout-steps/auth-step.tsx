import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Config } from 'app/config';
import './auth-step.scss';
import EmailAuthForm from '../email-auth-form/email-auth-form';
import AppLink from '../app-link/app-link';
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
      <div className='auth-step-container'>
        <div className='signin-column'>
          {this.state.signInError ? (
            <div className='facebook-signin-error'>
              <AppLink>{this.state.signInError}</AppLink>
            </div>
          ) : (
            ''
          )}
          <FacebookLogin
            appId={Config.FACEBOOK_APP_ID}
            autoLoad={true}
            cssClass='facebook-button'
            fields='email'
            icon='fa-facebook'
            callback={this.handleResponse.bind(this)}
          />
        </div>
        <div className='hor-divider'>or</div>
        <div className='signin-column'>
          <EmailAuthForm />
        </div>
      </div>
    );
  }
}
