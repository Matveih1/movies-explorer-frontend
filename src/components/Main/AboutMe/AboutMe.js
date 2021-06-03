import React from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import avatar from '../../../images/avatar.svg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(props) {
    return(
        <section className="about-me" id="aboutMe">
            <SectionTitle
                title='Студент'
            />
            <div className="about-me__info-block">
                <div className="about-me__info">
                    <div>
                        <h2 className="about-me__name">Виталий</h2>
                        <p className="about-me__profile">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__descr">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <ul class="about-me__link-items">
                        <li class="about-me__link-item"><Link to={'#'} className="about-me__link">Facebook</Link></li>
                        <li class="about-me__link-item"><Link to={'#'} className="about-me__link">Github</Link></li>
                    </ul>    
                </div>
                <img className="about-me__avatar" src={avatar} alt="аватар" />
            </div>
            <Portfolio/>
        </section>
    )
}

export default AboutMe;