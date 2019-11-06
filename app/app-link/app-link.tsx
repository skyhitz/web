import React from 'react';
import { inject } from 'mobx-react';

@inject((stores: any) => ({
  setDownloadApp: stores.paymentsStore.setDownloadApp.bind(
    stores.paymentsStore
  ),
}))
export default class AppLink extends React.Component<any> {
  openedLink() {
    this.props.setDownloadApp();
  }
  render() {
    let appUrl;
    if (this.props.android) {
      appUrl =
        'https://play.google.com/store/apps/details?id=com.skyhitz.skyhitz';
    } else {
      appUrl = 'https://itunes.apple.com/us/app/skyhitz/id1105406020';
    }
    return (
      <a
        href={appUrl}
        target="_blank"
        rel="noopener"
        className="link"
        onClick={this.openedLink.bind(this)}
      >
        {this.props.children}
        <style jsx>
          {`
            .link {
              align-items: center;
              justify-content: center;
              display: flex;
            }
          `}
        </style>
      </a>
    );
  }
}
