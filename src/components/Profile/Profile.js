import React from 'react';

import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from "../../contexts/contexts";

function Profile(props) {

    let currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    React.useEffect(() => {
        setButtonDisabled([name, email].findIndex((item) => item === "") !== -1);
    }, [name, email]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdate(name, email);
    }

    return (
        <>
            <Header/>
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form 
                    className = "profile__form"
                    onSubmit = {handleSubmit}
                >
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
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label className="profile__container">
                        <span className="profile__label">
                            E-mail
                        </span>
                        <input
                            type="text"
                            className="profile__input"
                            name="email"
                            placeholder="Введите почту"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <button 
                        className = "profile__button" 
                        type = "submit"
                        disabled = {buttonDisabled}
                    >
                        Редактировать
                    </button>
                </form>
                <button
                    className = "profile__signout"
                    onClick = {props.onSignOut}
                >
                    Выйти из аккаунта
                </button>
            </section>
        </>
    )
}

export default Profile;
