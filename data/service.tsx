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
    title: 'Technical Consultant',
    href: 'techical-consultant',
    description:
      'We will schedule a meeting to help you troubleshoot the issue in your project.'
  },
  {
    icon: <FiLayers />,
    title: 'Code Review',
    href: 'code-review',
    description: (
      <div>
        <p>
        We will review your codebase and do a lot of assessments. The accessments include:
        </p>
        <ul>
          <li>Application performance</li>
          <li>SEO</li>
          <li>Project structure</li>
          <li>Code cleaness</li>
        </ul>
      </div>
    )
  },
  {
    icon: <FiPhone />,
    title: 'Web & Mobile Development',
    href: 'web-mobile-development',
    description:
      'We will work closely with you to understand the requirements for your next project. Our working process and high skill team ensure that the final results will not only satisfy your requirements but also meet the industry technical standards.'
  },
];

export default data;
