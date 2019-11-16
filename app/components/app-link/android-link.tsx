import React from 'react';

interface Props {
  userAgent?: any;
}

export default class AndroidLink extends React.Component<Props> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    let appUrl =
      'https://play.google.com/store/apps/details?id=com.skyhitz.skyhitz';
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
