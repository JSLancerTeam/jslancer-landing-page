import React from 'react';

import { IData } from '../../data/team';
import TeamBlock from './Block';

interface IProps {
  data: Array<IData>;
}

const Team: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="rn-team-area ptb--120 bg_color--1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
            <h2 className="title">Skilled Team</h2>
            <p></p>
          </div>
        </div>
      </div>
      <TeamBlock data={data} />
    </div>
  </div>
);

export default Team;
