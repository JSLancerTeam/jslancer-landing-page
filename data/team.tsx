import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';

interface ISocialNetwork {
  icon: JSX.Element;
  url: string;
}

export interface IData {
  images: string;
  title: string;
  href: string;
  designation: string;
  socialNetwork: Array<ISocialNetwork>;
}

const data = [
  {
    images: 'david-tran',
    title: 'David Tran',
    href: '#',
    designation: 'Lead developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/davidtran'
      },
      {
        icon: <FaTwitter />,
        url: 'https://twitter.com/davidtranwd'
      }
    ]
  },
  {
    images: 'leo-phan',
    title: 'Leo Phan',
    href: '#',
    designation: 'Full-stack developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/nhuthuy212507'
      }
    ]
  },
  {
    images: 'tony-nguyen',
    title: 'Tony Nguyen',
    href: '#',
    designation: 'Frontend Developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/nhattruongniit'
      }
    ]
  }
];

export default data;
