import React from 'react';
import Head from 'next/head';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import '../../public/assets/scss/style.scss';

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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
    {/* Start Back To Top */}
    <div className="backto-top">
      <ScrollToTop showUnder={160}>
        <FiChevronUp />
      </ScrollToTop>
    </div>
    {/* End Back To Top */}
  </div>
);

export default Layout;
