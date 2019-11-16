import React from 'react';

interface Props {
  userAgent?: any;
}

export default class IOSLink extends React.Component<Props> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    let appUrl = 'https://itunes.apple.com/us/app/skyhitz/id1105406020';
    return (
      <a
        href={appUrl}
        target="_blank"
        rel="noopener"
        style={{ color: 'white' }}
      >
        {this.props.children}
      </a>
    );
  }
}
