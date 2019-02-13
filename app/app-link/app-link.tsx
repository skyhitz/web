import React from 'react';
import Platform from '../services/platform';

interface Props {
  userAgent?: any;
}

export default class AppLink extends React.Component<Props> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    let appUrl;
    if (Platform.Android(this.props.userAgent)) {
      appUrl =
        'https://play.google.com/store/apps/details?id=com.skyhitz.skyhitz';
    } else {
      appUrl = 'https://itunes.apple.com/us/app/skyhitz/id1105406020';
    }
    return (
      <a href={appUrl} target='_blank' rel='noopener'>
        {this.props.children}
      </a>
    );
  }
}
