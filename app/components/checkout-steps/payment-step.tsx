import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import { inject } from 'mobx-react';
import './payment-step.scss';

@inject((stores: any) => ({
  subscribeUser: stores.paymentsStore.subscribeUser.bind(stores.paymentsStore),
  refreshSubscription: stores.paymentsStore.refreshSubscription.bind(
    stores.paymentsStore
  ),
  subscriptionLoaded: stores.paymentsStore.subscriptionLoaded,
  submittingSubscription: stores.paymentsStore.submittingSubscription
}))
class CardCheckout extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.refreshSubscription();
  }

  async submit() {
    const { token } = await this.props.stripe.createToken();
    const { id } = token;
    const subscribed = await this.props.subscribeUser(id);
    if (subscribed) console.log('Purchase Complete!');
  }

  renderSubscribeBtn() {
    if (this.props.submittingSubscription) {
      return (
        <button className='submit-payment'>Submitting Transaction...</button>
      );
    }
    return (
      <button onClick={this.submit.bind(this)} className='submit-payment'>
        Submit Payment
      </button>
    );
  }

  render() {
    // return (
    //   <div className='checkout-wrap'>
    //     <p className='checking-copy'>
    //       Thanks for signing up, we'll notify you when this feature is out!
    //     </p>
    //   </div>
    // );
    if (!this.props.subscriptionLoaded) {
      return (
        <div className='checkout-wrap'>
          <p className='checking-copy'>Checking if you already subscribed...</p>
        </div>
      );
    }
    return (
      <div className='checkout-wrap'>
        <CardElement hidePostalCode={true} />
        {this.renderSubscribeBtn()}
      </div>
    );
  }
}

const InjectedCardCheckout = injectStripe(CardCheckout);

export default class PaymentStep extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCardCheckout />
      </Elements>
    );
  }
}
