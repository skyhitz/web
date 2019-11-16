import React from 'react';
import { inject } from 'mobx-react';
import './email-auth-form.scss';

interface Props {
  usernameOrEmail: string;
  password: string;
  loading: boolean;
  showAppLink: boolean;
}

@inject((stores: any) => ({
  validateUsernameOrEmail: stores.signInValidationStore.validateUsernameOrEmail.bind(
    stores.signInValidationStore
  ),
  usernameOrEmailValid: stores.signInValidationStore.usernameOrEmailValid,
  validatePassword: stores.signInValidationStore.validatePassword.bind(
    stores.signInValidationStore
  ),
  passwordValid: stores.signInValidationStore.passwordValid,
  setBackendError: stores.signInValidationStore.setBackendError.bind(
    stores.signInValidationStore
  ),
  validForm: stores.signInValidationStore.validForm,
  error: stores.signInValidationStore.error,
  signIn: stores.sessionStore.signIn.bind(stores.sessionStore),
  refreshSubscription: stores.paymentsStore.refreshSubscription.bind(
    stores.paymentsStore
  ),
}))
export default class EmailAuthForm extends React.Component<any, Props> {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: '',
      loading: false,
      showAppLink: false,
    };
  }

  handleUsernameOrEmailChange(event) {
    this.setState({ usernameOrEmail: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.props.validatePassword(this.state.password);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  async signIn(event) {
    event.preventDefault();
    this.setState({ loading: true });
    try {
      await this.props.signIn({
        usernameOrEmail: this.state.usernameOrEmail,
        password: this.state.password,
      });
      await this.props.refreshSubscription();
      this.setState({ loading: false });
    } catch (e) {
      if (
        e ===
        'Sorry, your username or email does not exist. Sign up to create an account.'
      ) {
        e = 'Sign up through our mobile app.';
        this.setState({ showAppLink: true, loading: false });
        this.props.setBackendError(e);
        return;
      }
      this.props.setBackendError(e);
    }
    return this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <div className="error-container">
          {this.state.showAppLink ? (
            <div>{this.props.error}</div>
          ) : (
            this.props.error
          )}
        </div>
        <form onSubmit={this.signIn.bind(this)}>
          <input
            type="text"
            placeholder="Email or username"
            className="email-input"
            value={this.state.usernameOrEmail}
            onChange={this.handleUsernameOrEmailChange.bind(this)}
            onBlur={() => {
              this.props.validateUsernameOrEmail(this.state.usernameOrEmail);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="email-input"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
            onBlur={() => this.props.validatePassword(this.state.password)}
          />
          <input
            type="submit"
            value="Log In"
            className="submit-btn btn glow"
            disabled={!this.props.validForm}
          />
        </form>
      </div>
    );
  }
}
