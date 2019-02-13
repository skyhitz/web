import React from 'react';
import { Config } from 'app/config';
import Head from 'app/components/head/head';
import GoogleTagManager from 'app/components/google-tag-manager/google-tag-manager';
import Loader from 'app/components/loader/loader';
import { Transition } from 'react-transition-group';
import { StripeProvider } from 'react-stripe-elements';
import { inject } from 'mobx-react';
import Providers from '../providers/providers';
import 'app/fonts/fonts.scss';
import './body.scss';

interface Props {
  loaded: boolean;
  stripe: any;
  loadSession: any;
}

@inject((stores: any) => ({
  loadSession: stores.sessionStore.loadSession.bind(stores.sessionStore)
}))
class Body extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      stripe: null
    };
  }

  loadStripe() {
    return new Promise((resolve, reject) => {
      const stripeJs = document.createElement('script');
      stripeJs.src = 'https://js.stripe.com/v3/';
      stripeJs.async = true;
      stripeJs.onload = resolve;
      stripeJs.onerror = reject;
      document.body && document.body.appendChild(stripeJs);
    });
  }

  async componentDidMount() {
    let w: any = window;
    [await this.props.loadSession(), await this.loadStripe()];

    this.setState({
      loaded: true,
      stripe: w.Stripe(Config.STRIPE_PUBLISHABLE_KEY)
    });
  }

  render() {
    return (
      <div>
        <Head />
        <StripeProvider stripe={this.state.stripe}>
          {this.props.children}
        </StripeProvider>
        <Transition
          in={!this.state.loaded}
          timeout={{
            enter: 100,
            exit: 100
          }}
          unmountOnExit
        >
          {status => {
            return (
              <div className={`loading-overlay fade-${status}`}>
                <Loader />
              </div>
            );
          }}
        </Transition>
        <GoogleTagManager gtmId='GTM-5HR7H3L' />
      </div>
    );
  }
}

class BodyWrap extends React.Component<any, Props> {
  render() {
    return (
      <Providers>
        <Body>{this.props.children}</Body>
      </Providers>
    );
  }
}

export default BodyWrap;
