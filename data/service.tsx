import * as React from 'react';
import { FiLayers, FiUsers, FiPhone } from 'react-icons/fi';

export interface IData {
  icon: JSX.Element;
  title: string;
  href: string;
  description: string | JSX.Element;
}

const data = [
  {
    icon: <FiUsers />,
    title: 'Development of web and mobile applications',
    href: 'web-and-mobile',
    description: (
      <p>
        We turn your concept and business needs into a final website and mobile app.
      </p>
    )

  },
  {
    icon: <FiLayers />,
    title: 'MVP development',
    href: 'mvp-development',
    description: (
      <p>
        We assist you in creating an MVP to get a quick insight of your customers' needs.
      </p>
    )
  },
  {
    icon: <FiPhone />,
    title: 'Re-engineering of application',
    href: 'application-re-engineering',
    description: (
      <p>
        Our application re-engineering improves the efficiency of existing web solution by enhancing its performance.
      </p>
    )

  },
];

export default data;
