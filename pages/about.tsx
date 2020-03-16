import * as React from 'react';
import { NextPage } from 'next';

import Layout from '../components/common/Layout';
import Breadcrumb from '../components/common/Breadcrumb';
import Counter from '../components/Counter';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About Page">
      <Breadcrumb title="About" />
      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-3.jpg"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About</h2>
                    <p className="description">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour, or randomised words which dont look even
                      slightly believable. If you are going.
                    </p>
                  </div>
                  <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Find Your Work Now</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className="rn-btn btn-white" href="/about">
                Get Started
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              <img
                src="/assets/images/about/finding-us-01.png"
                alt="Finding Images"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area  */}
    </Layout>
  );
};

export default AboutPage;
