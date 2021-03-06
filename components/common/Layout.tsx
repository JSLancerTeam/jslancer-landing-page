import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="We are a development company which provide consultant and mobile and web development"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="JSLancer - Mobile and Web development studio - React, React Native, NodeJS"
      />
      <meta
        property="og:description"
        content="We are a development company which provide consultant and mobile and web development"
      />
      <meta property="og:url" content="https://jslancer.com/" />
      <meta property="og:site_name" content="JSLancer" />
      <meta property="og:image" content="/assets/jslancer/about-us.jpg" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="961" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1567561193573896'); // Insert your pixel ID here.
        fbq('track', 'PageView');
      `
        }}
      ></script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1567561193573896&ev=PageView&noscript=1"
        />
      </noscript>
      <script
        dangerouslySetInnerHTML={{ __html: `fbq('track', 'ViewContent');` }}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71951233-1', 'auto');
  ga('send', 'pageview');`
        }}
      ></script>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
