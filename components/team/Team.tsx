import React from 'react';
import Link from 'next/link';

import { IData } from '../../pages/team/data';

interface IProps {
  data: Array<IData>;
}

const Team: React.FunctionComponent<IProps> = ({ data }) => (
  <div className="rn-team-area ptb--120 bg_color--1" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
            <h2 className="title">Skilled Team</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {data.map((value, i) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
            <div className="team">
              <div className="thumbnail">
                <img
                  src={`/assets/images/team/team-${value.images}.jpg`}
                  alt="Blog Images"
                />
              </div>
              <div className="content">
                <Link href={`/team/detail`} as={`/team/${value.href}`}>
                  <a href={`/team/${value.href}`}>
                    <h4 className="title">{value.title}</h4>
                    <p className="designation">{value.designation}</p>
                  </a>
                </Link>
              </div>
              <ul className="social-icon">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a href={`${social.url}`}>{social.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team;
