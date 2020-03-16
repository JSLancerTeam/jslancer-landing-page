import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

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
        icon: <FaFacebookF />,
        url: '#'
      },
      {
        icon: <FaLinkedinIn />,
        url: '#'
      },
      {
        icon: <FaTwitter />,
        url: '#'
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
        icon: <FaFacebookF />,
        url: '#'
      },
      {
        icon: <FaLinkedinIn />,
        url: '#'
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
        icon: <FaFacebookF />,
        url: '#'
      },
      {
        icon: <FaLinkedinIn />,
        url: '#'
      },
      {
        icon: <FaTwitter />,
        url: '#'
      }
    ]
  },
];

export default data;
