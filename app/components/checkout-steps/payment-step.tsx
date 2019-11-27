import React, { Component } from 'react';
import { CardElement, injectStripe, Elements } from 'react-stripe-elements';
import { inject } from 'mobx-react';
import './payment-step.scss';

@inject((stores: any) => ({
  subscribeUser: stores.paymentsStore.subscribeUser.bind(stores.paymentsStore),
  buyCredits: stores.paymentsStore.buyCredits.bind(stores.paymentsStore),
  refreshSubscription: stores.paymentsStore.refreshSubscription.bind(
    stores.paymentsStore
  ),
  subscriptionLoaded: stores.paymentsStore.subscriptionLoaded,
  submittingSubscription: stores.paymentsStore.submittingSubscription,
}))
class CardCheckout extends Component<any, any> {
  state = {
    selectedOption: 'subscription',
    amount: 50,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.refreshSubscription();
  }

  async submit() {
    const { token } = await this.props.stripe.createToken();
    const { id } = token;
    if (this.state.selectedOption === 'one-time') {
      const purchased = await this.props.buyCredits(id, this.state.amount);
      if (purchased) {
        console.log('Purchase Complete!');
      }
      return;
    }

    const subscribed = await this.props.subscribeUser(id);
    if (subscribed) {
      console.log('Purchase Complete!');
    }
  }

  renderSubscribeBtn() {
    if (this.props.submittingSubscription) {
      return (
        <button className="submit-payment">Submitting Transaction...</button>
      );
    }
    return (
      <button onClick={this.submit.bind(this)} className="submit-payment">
        Submit Payment
      </button>
    );
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  handleAmountChange = ({ target }) => {
    if (target.valueAsNumber > 2000) {
      return this.setState({
        amount: 2000,
      });
    }
    this.setState({
      amount: target.value,
    });
  };

  changeToOneTime = () => {
    this.setState({
      selectedOption: 'one-time',
    });
  };

  changeToSubscription = () => {
    this.setState({
      selectedOption: 'subscription',
    });
  };

  renderRadioForm() {
    return (
      <form className="options">
        <a onClick={this.changeToSubscription}>
          <div
            className={`radio ${
              this.state.selectedOption === 'subscription' ? 'selected' : ''
            }`}
          >
            <label>
              <h3>7</h3>
              <p>Monthly credit plan</p>
              <div className="price-section">
                <strong>
                  <sup>$</sup>7
                </strong>
                <div className="per-month">per month</div>
              </div>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  value="subscription"
                  checked={this.state.selectedOption === 'subscription'}
                  readOnly
                />
              </div>
            </label>
          </div>
        </a>
        <a onClick={this.changeToOneTime}>
          <div
            className={`radio ${
              this.state.selectedOption === 'one-time' ? 'selected' : ''
            }`}
          >
            <label>
              <input
                id="credits-input"
                type="number"
                max={2000}
                value={this.state.amount}
                onChange={this.handleAmountChange}
              />
              <p>Buy credits</p>
              <div className="price-section">
                <strong>
                  <sup>$</sup>
                  {this.state.amount}
                </strong>
                <div className="per-month">one time</div>
              </div>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  value="one-time"
                  checked={this.state.selectedOption === 'one-time'}
                  readOnly
                />
              </div>
            </label>
          </div>
        </a>
      </form>
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
        <div className="checkout-wrap">
          <p className="checking-copy">Checking if you already subscribed...</p>
        </div>
      );
    }
    return (
      <div className="checkout-wrap">
        {this.renderRadioForm()}
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
