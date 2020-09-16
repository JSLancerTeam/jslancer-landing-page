import React from "react";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const ContactDetails = () => (
  <div className="row">
    {/* Start Single Address  */}
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
      <div className="rn-address">
        <div className="icon">
          <FiMail />
        </div>
        <div className="inner">
          <h4 className="title">Email</h4>
          <p>
            <a href="mailto:hello@jslancer.com">hello@jslancer.com</a>
          </p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}

    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_sm--50">
      <div className="rn-address">
        <div className="icon">
          <FiHeadphones />
        </div>
        <div className="inner">
          <h4 className="title">Phone</h4>
          <p>
            <a href="tel:+057 254 365 456">(+84) 79 770 3647</a>
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
          <p>189 Hoang Hoa Tham, Tan Binh district, HCMC, Vietnam</p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}
  </div>
);

export default ContactDetails;
