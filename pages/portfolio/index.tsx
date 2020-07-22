import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import data from '../../data/portoflio';
import Layout from '../../components/common/Layout';
import Breadcrumb from '../../components/common/Breadcrumb';

const PortfolioPage: NextPage = () => {
  return (
    <Layout title="JSLancer - Portfolio">
      <Breadcrumb title="Portfolio" />
      {/* Start Portfolio Area */}
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30">
                  <h2 className="title">All Works</h2>
                  <p>
                    We have started working with Javascript since 2014. Since
                    that time, We have created countless successful web-app for
                    my clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {data.map((value, index) => (
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
                  <div className="portfolio text-left mt--40">
                    <div className="thumbnail-inner">
                      <div className={`thumbnail ${value.image}`}></div>
                      <div className={`bg-blr-image ${value.image}`}></div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <h4>
                          <Link
                            href="/portfolio/[detail]"
                            as={`/portfolio/${value.href}`}
                          >
                            <a href={`/portfolio/${value.href}`}>
                              {value.title}
                            </a>
                          </Link>
                        </h4>
                        <div className="portfolio-button">
                          <Link
                            href="/portfolio/[detail]"
                            as={`/portfolio/${value.href}`}
                          >
                            <a
                              className="rn-btn"
                              href={`/portfolio/${value.href}`}
                            >
                              View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}
    </Layout>
  );
};

export default PortfolioPage;
