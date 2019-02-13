import React from 'react';
import { inject } from 'mobx-react';

const getNavStates = (indx, length) => {
  let styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }
  return { current: indx, styles: styles };
};

const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
};

interface Props {
  steps: any;
  showNavigation?: boolean;
  user?: any;
  subscribed?: boolean;
}

@inject((stores: any) => ({
  user: stores.sessionStore.user,
  subscribed: stores.paymentsStore.subscribed
}))
export default class MultiStep extends React.Component<Props> {
  state = {
    showPreviousBtn: false,
    showNextBtn: false,
    compState: 0,
    navState: getNavStates(0, this.props.steps.length)
  };

  handleState(props) {
    if (props.subscribed) {
      return this.setNavState(2);
    }

    if (props.user) {
      this.setNavState(1);
    }
  }

  componentWillMount() {
    this.handleState(this.props);
  }

  componentWillReceiveProps(props) {
    this.handleState(props);
  }

  setNavState = next => {
    this.setState({
      navState: getNavStates(next, this.props.steps.length)
    });
    if (next < this.props.steps.length) {
      this.setState({ compState: next });
    }
    this.setState(checkNavState(next, this.props.steps.length));
  }

  next = () => {
    this.setNavState(this.state.compState + 1);
  }

  previous = () => {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1);
    }
  }

  getClassName = (className, i) => {
    return className + '-' + this.state.navState.styles[i];
  }

  renderSteps = () => {
    return this.props.steps.map((_, i) => (
      <li className={this.getClassName('progtrckr', i)} key={i} value={i}>
        <span>{this.props.steps[i].name}</span>
      </li>
    ));
  }
  static defaultProps: { showNavigation: boolean };

  render() {
    return (
      <div className='container'>
        <ol className='progtrckr'>{this.renderSteps()}</ol>
        {this.props.steps[this.state.compState].component}
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};
