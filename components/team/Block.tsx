import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { IData } from '../../pages/team/data';

interface IProps {
  data: Array<IData>;
}

const TeamBlock: FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="row">
      {data.map((value, i) => (
        <div className="col-lg-3 col-md-6 col-12" key={i}>
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
  );
};
export default TeamBlock;
