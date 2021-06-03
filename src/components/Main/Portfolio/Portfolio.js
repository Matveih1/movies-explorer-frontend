import React from 'react';
import { Link } from 'react-router-dom';

import './Portfolio.css';

function Portfolio(props) {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__sites">
        <li className="portfolio__site">
          <Link to={'#'} className="portfolio__link">Статичный сайт</Link>  
          <Link to={'#'} className="portfolio__link">&#8599;</Link>
        </li>
        <li className="portfolio__site">
          <Link to={'#'} className="portfolio__link">Адаптивный сайт</Link>
          <Link to={'#'} className="portfolio__link">&#8599;</Link>
        </li>
        <li className="portfolio__site">
          <Link to={'#'} className="portfolio__link">Однастраничное приложение</Link>
          <Link to={'#'} className="portfolio__link">&#8599;</Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
