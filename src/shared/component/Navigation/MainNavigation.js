import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handlerOpenDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={handlerOpenDrawer} />}
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : (
        ''
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={handlerOpenDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
