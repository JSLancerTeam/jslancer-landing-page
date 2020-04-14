import * as React from 'react';
import { NextPage } from 'next';

import Layout from '../components/common/Layout';
import Breadcrumb from '../components/common/Breadcrumb';

const CareerPage: NextPage = () => {
  return (
    <Layout title="JSLancer - Career">
      <Breadcrumb title="Career" />
      {/* Start Career Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">{/* CONTENT HERE */}</div>
        </div>
      </div>
      {/* End Career Area  */}
    </Layout>
  );
};

export default CareerPage;
