import React from 'react';

const Contact: React.FunctionComponent = () => (
  <div className="contact-form--1">
    <div className="container">
      <div className="row row--35 align-items-start">
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="section-title text-left mb--50">
            <h2 className="title">Find out more</h2>
            <p className="description">
              We provide 30 mins of free consultant. Click on the button beblow
              to schedule a meeting with us. If you have some question and you
              want to answer quickly, feel free to send me an email at{' '}
              <a href="mailto:david@jslancer.com">david@jslancer.com</a>
            </p>
            <a
              className="rn-btn"
              href="https://calendly.com/jslancer-contact-us/30min"
            >
              Schedule a meeting
            </a>
          </div>
          <div className="form-wrapper">
            {/* <form>
              <label htmlFor="item01">
                <input
                  type="text"
                  name="name"
                  id="item01"
                  value=""
                  placeholder="Your Name *"
                />
              </label>

              <label htmlFor="item02">
                <input
                  type="text"
                  name="email"
                  id="item02"
                  value=""
                  placeholder="Your email *"
                />
              </label>

              <label htmlFor="item03">
                <input
                  type="text"
                  name="subject"
                  id="item03"
                  value=""
                  placeholder="Write a Subject"
                />
              </label>
              <label htmlFor="item04">
                <textarea
                  id="item04"
                  name="message"
                  value=""
                  placeholder="Your Message"
                />
              </label>
              <button
                className="rn-button-style--2 btn-solid"
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
              >
                Submit
              </button>
            </form> */}
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="thumbnail mb_md--30 mb_sm--30">
            <img src="/assets/images/contact-us.jpg" alt="jslancer" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
