import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBlock from './TextBlock/TextBlock';

import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="aboutProject">
            <SectionTitle
                title='О проекте'
            />
            <div className="about-project__text-blocks">
                <TextBlock
                    title="Дипломный проект включал 5 этапов"
                    text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
                />
                <TextBlock
                    title="На выполнение диплома ушло 5 недель"
                    text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
                />
            </div>
            <div className='about-project__time'>
                <div className='about-project__time-item about-project__time-first-part'>
                1 неделя
                </div>
                <div className='about-project__time-item about-project__time-second-part'>
                4 недели
                </div>
                <div className='about-project__time-item about-project__time-text'>
                Back-end
                </div>
                <div className='about-project__time-item about-project__time-text'>
                Front-end
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
