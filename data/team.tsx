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
    images: 'david-tran-new.png',
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
    images: 'leo-phan-new.png',
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
    images: 'tony-nguyen-new.png',
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
    images: 'tuan-anh-new.png',
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
  {
    images: 'viet-anh-new.png',
    title: 'Viet Anh',
    href: '#',
    designation: 'Front-end Developer',
    socialNetwork: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/vietanhcoder'
      }
    ]
  }
];

export default data;
