import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/common/Layout';
import Breadcrumb from '../../components/common/Breadcrumb';
import data from './data';

const ServicePage: NextPage = () => {
  return (
    <Layout title="Service Page">
      <Breadcrumb title="Service" />
      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Digital Marketing</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {data.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <Link href="/service/[detail]" as={`/service/${val.href}`}>
                  <a href={`/service/${val.href}`}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service Area */}
    </Layout>
  );
};

export default ServicePage;
