import * as React from 'react';
import { NextPage } from 'next';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';

import Layout from '../components/common/Layout';
import Contact from '../components/Contact';
import Breadcrumb from '../components/common/Breadcrumb';

const ContactPage: NextPage = () => {
  return (
    <Layout title="JSLancer - Contact Us">
      <Breadcrumb title="Contact Us" />

      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <div className="icon">
                  <FiHeadphones />
                </div>
                <div className="inner">
                  <h4 className="title">Contact With Phone Number</h4>
                  <p>
                    <a href="tel:+057 254 365 456">(+84) 79 770 3647</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <h4 className="title">Email Address</h4>
                  <p>
                    <a href="mailto:david@jslancer.com">david@jslancer.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <h4 className="title">Location</h4>
                  <p>
                    189 Hoang Hoa Tham, Tan Binh district, HCMC, Vietnam
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}

      {/* Start Contact Page Area  */}
      <div className="rn-contact-page ptb--120 bg_color--1">
        <Contact />
      </div>
      {/* End Contact Page Area  */}
    </Layout>
  );
};

export default ContactPage;
