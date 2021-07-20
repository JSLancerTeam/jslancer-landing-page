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
    images: 'david.png',
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
    images: 'kiet-nguyen.png',
    title: 'Kiet Nguyen',
    href: '#',
    designation: 'Business Manager',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/davidtran'
      }
    ]
  },
  {
    images: 'tony.png',
    title: 'Tony Nguyen',
    href: '#',
    designation: 'Frontend Developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/nhattruongniit'
      }
    ]
  },
  {
    images: 'leo-phan.png',
    title: 'Leo Phan',
    href: '#',
    designation: 'Full-stack developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/leophan07'
      }
    ]
  },
  {
    images: 'clement.png',
    title: 'Clement Le',
    href: '#',
    designation: 'Full-stack Developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/tuananhitoct'
      }
    ]
  },
];

export default data;
