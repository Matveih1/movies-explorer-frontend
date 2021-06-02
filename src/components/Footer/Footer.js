import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__blocks'>
          <p className='footer__copyright'>© 2020</p>
          <ul className='footer__items'>
            <li className='footer__item'>Яндекс.Практикум</li>
            <li className='footer__item'>
              <Link to='#' className='footer__link'>
                Github
              </Link>
            </li>
            <li className='footer__item'>
              <Link to='#' className='footer__link'>
                Facebook
              </Link>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer;