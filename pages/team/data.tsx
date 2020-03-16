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
    images: '01',
    title: 'Jone Due',
    href: 'jone-due',
    designation: 'Sr. Web Developer',
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
    images: '02',
    title: 'Joynab Khatun',
    href: 'joynab-khatun',
    designation: 'Front-end Engineer',
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
    images: '03',
    title: 'John Dou',
    href: 'john-dou',
    designation: 'Sr. Graphic Designer',
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
    images: '04',
    title: 'Jone Due',
    href: 'jone-due',
    designation: 'Sr. Web Developer',
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
  }
];

export default data;
