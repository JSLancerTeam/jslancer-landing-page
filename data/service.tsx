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
    title: 'Web and Mobile application development',
    href: 'web-and-mobile',
    description: (
      <p>
        We transform your idea and business requirements into a real product.
      </p>
    )

  },
  {
    icon: <FiLayers />,
    title: 'MVP development',
    href: 'mvp-development',
    description: (
      <p>
        We help you implement an MVP to gain understanding about your customers’ interest in a very short time.
      </p>
    )
  },
  {
    icon: <FiPhone />,
    title: 'Application re-engineering',
    href: 'application-re-engineering',
    description: (
      <p>
        Our application re-engineering amends performance of existing web solutions to make them more business efficient.
      </p>
    )

  },
];

export default data;
