import * as React from 'react';
import { FiCast, FiLayers, FiUsers, FiMonitor } from 'react-icons/fi';

export interface IData {
  icon: JSX.Element;
  title: string;
  href: string;
  description: string;
}

const data = [
  {
    icon: <FiCast />,
    title: 'Business Stratagy',
    href: 'business-stratagy',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiLayers />,
    title: 'Website Development',
    href: 'website-development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiUsers />,
    title: 'Marketing & Reporting',
    href: 'marketing-and-reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiMonitor />,
    title: 'Mobile App Development',
    href: 'mobile-app-development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  }
];

export default data;
