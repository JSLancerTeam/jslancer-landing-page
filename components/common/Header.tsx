import React, { useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import ActiveLink from './ActiveLink';

const Header: React.FunctionComponent = () => {
  function menuTrigger() {
    (document.querySelector('.header-wrapper') as HTMLElement).classList.toggle(
      'menu-open'
    );
  }
  function closeMenuTrigger() {
    (document.querySelector('.header-wrapper') as HTMLElement).classList.remove(
      'menu-open'
    );
  }

  function handleScroll() {
    var value = window.scrollY;
    if (value > 100) {
      (document.querySelector('.header--fixed') as HTMLElement).classList.add(
        'sticky'
      );
    } else {
      (document.querySelector(
        '.header--fixed'
      ) as HTMLElement).classList.remove('sticky');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header-area formobile-menu header--fixed default-color">
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <a href="/">
              <img
                className="logo-1"
                src="/assets/images/logo/logo-light.png"
                alt="Logo Images"
              />
              <img
                className="logo-2"
                src="/assets/images/logo/logo-all-dark.png"
                alt="Logo Images"
              />
            </a>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <ActiveLink href="/" title="Home" />
              <ActiveLink href="/about" title="About" />
              <ActiveLink href="/service" title="Service" />
              <ActiveLink href="/portfolio" title="Portfolio" />
              <ActiveLink href="/team" title="Team" />
              <ActiveLink href="/contact" title="Contact" />
            </ul>
          </nav>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
