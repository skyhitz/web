import React from 'react';
import Modal from 'app/components/modal/modal';
import CheckoutSteps from 'app/components/checkout-steps/checkout-steps';
import './checkout-modal.scss';

export default class CheckoutModal extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className='subscribe-btn' onClick={this.onOpenModal}>
          Subscribe
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ overlay: 'overlay', modal: 'modal' }}
        >
          <CheckoutSteps />
        </Modal>
      </div>
    );
  }
}
