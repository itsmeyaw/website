import * as React from 'react';
import Mylink from './mylink';

const Footer = ({ children }) => {
  const year = new Date(Date.now()).getFullYear();

  return (
    <footer
      className={
        'align-middle text-center py-10 font-sans dark:text-white bottom-0'
      }
    >
      Copyright © {year}
      <br />
      Made with ❤️ by Yudhistira Wibowo with{' '}
      <Mylink href={'https://www.gatsbyjs.com/'} target={'_blank'}>
        Gatsby
      </Mylink>{' '}
      and deployed on{' '}
      <Mylink href={'https://www.netlify.com/'} target={'_blank'}>
        Netlify
      </Mylink>
    </footer>
  );
};

export default Footer;
