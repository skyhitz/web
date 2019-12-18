import React, { Component } from 'react';
import MultiStep from './react-multistep';
import { DownloadStep } from './download-step';
import { AuthStep } from './auth-step';
import PaymentStep from './payment-step';
import { ConfirmationStep } from './confirmation-step';
import './checkout-steps.scss';

const steps = [
  { name: 'Download', component: <DownloadStep /> },
  { name: 'Sign In', component: <AuthStep /> },
  { name: 'Subscribe', component: <PaymentStep /> },
  { name: 'Done', component: <ConfirmationStep /> },
];

export default class CheckoutSteps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MultiStep steps={steps} />;
  }
}
