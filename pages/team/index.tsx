import * as React from 'react';
import { NextPage } from 'next';
import data from '../../data/team';

import Layout from '../../components/common/Layout';
import Breadcrumb from '../../components/common/Breadcrumb';
import TeamBlock from '../../components/team/Block';

const TeamPage: NextPage = () => {
  return (
    <Layout title="Team Page">
      <Breadcrumb title="Team" />
      <main className="page-wrapper">
        {/* Start Team Area  */}
        <div className="rn-team-wrapper ptb--120 bg_color--1">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30">
                    <h2>Our Skilled Team</h2>
                    <p>

                    </p>
                  </div>
                </div>
              </div>
              <TeamBlock data={data} />
            </div>
          </div>
        </div>
        {/* End Team Area  */}
      </main>
    </Layout>
  );
};

export default TeamPage;
