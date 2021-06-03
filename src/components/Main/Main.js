import React from 'react';

import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutPoject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main (props) {

  return (
    <>
      <Header
        loggedIn = {props.loggedIn}
      />
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default Main;