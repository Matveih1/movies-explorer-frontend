import React from 'react';

import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle'

function Techs(props) {

    return (
        <section className="techs" id="technology">
            <SectionTitle
                title='Технологии'
            />
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul class="techs__items">
                <li class="techs__item">HTML</li>
                <li class="techs__item">CSS</li>
                <li class="techs__item">JS</li>
                <li class="techs__item">React</li>
                <li class="techs__item">Git</li>
                <li class="techs__item">Express.js</li>
                <li class="techs__item">MongoDB</li>
            </ul>  
        </section>
    )
}

export default Techs;
