import React from 'react';
import Head from 'next/head';

class HeadComponent extends React.Component {
  render() {
    return (
      <Head>
        <meta
          name="title"
          content="Skyhitz - Decentralized video music market"
        />
        <meta
          name="description"
          content="Buy and sell music videos. Decentralized video music market. Upload original content and monetize it online."
        />
        <meta
          name="keywords"
          content="skyhitz, music, beats, sell, buy, decentralized, producers, beatmakers, beatmaker, artists, promote, crypto, creators, flip, market, stellar, xlm"
        />
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@skyhitzio" />
        <meta
          name="twitter:description"
          content="Buy and sell music videos. Decentralized video music market. Upload original content and monetize it online."
        />
        <meta name="twitter:app:country" content="US" />
        <meta name="twitter:app:name:iphone" content="Skyhitz" />
        <meta name="twitter:app:id:iphone" content="1105406020" />
        <meta name="twitter:app:url:iphone" content="skyhitz://+" />
        <meta name="twitter:app:name:ipad" content="Skyhitz" />
        <meta name="twitter:app:id:ipad" content="1105406020" />
        <meta name="twitter:app:url:ipad" content="skyhitz://+" />
        <meta name="twitter:app:name:googleplay" content="Skyhitz" />
        <meta name="twitter:app:id:googleplay" content="com.skyhitz.skyhitz" />
        <meta
          name="twitter:app:url:googleplay"
          content="https://play.google.com/store/apps/details?id=com.skyhitz.skyhitz"
        />
        <meta property="og:title" content="Skyhitz" />
        <meta
          property="og:description"
          content="Buy and sell music videos. Decentralized video music market. Upload original content and monetize it online."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/skyhitz/image/upload/v1574102962/web/skyhitz-social.png"
        />
        <meta property="og:url" content="https://skyhitz.io" />
        <meta property="fb:app_id" content="564403243666491" />
        <meta property="og:site_name" content="Skyhitz" />
        <meta
          name="p:domain_verify"
          content="418ab0845b3db4cf3f4c9efe8ad0f80e"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <title>Skyhitz - Decentralized video music market</title>
        <link rel="canonical" href="https://skyhitz.io" />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/skyhitz/image/upload/v1512780194/web/favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://js.stripe.com"
          rel="preconnect"
          crossOrigin="true"
        />
        <link
          href="https://connect.facebook.net"
          rel="preconnect"
          crossOrigin="true"
        />
        <link
          href="https://www.googletagmanager.com"
          rel="preconnect"
          crossOrigin="true"
        />
      </Head>
    );
  }
}

export default HeadComponent;
