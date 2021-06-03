import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {
    return (
        <>
            <Header/>
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">
                    <label className="profile__container">
                        <span className="profile__label">
                            Имя
                        </span>
                        <input
                            type="text"
                            className="profile__input"
                            name="name"
                            placeholder="Введите имя"
                            required
                            value={props.name}
                        />
                    </label>
                    <label className="profile__container">
                        <span className="profile__label">
                            E-mail
                        </span>
                        <input
                            type="text"
                            className="profile__input"
                            name="name"
                            placeholder="Введите имя"
                            required
                            value={props.email}
                        />
                    </label>
                    <button className="profile__button" type="submit">
                        Редактировать
                    </button>
                </form>
                <Link to="/sign-out" className="profile__signout">
                    Выйти из аккаунта
                </Link>
            </section>
        </>
    )
}

export default Profile;
