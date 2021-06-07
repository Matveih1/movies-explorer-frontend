import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import "./Header.css";
import logo from '../../images/logo.svg';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header(props) {

    const history = useHistory();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
    

    const headerClassName = `header ${location.pathname === '/' && 'header__start'}`; 

    function handleLogin() {
        history.push('/sing-in');
    }

    function handleProfile() {
        history.push('/profile');
    }

    return (
        <header className = { headerClassName } >
            <Link to='/'>
                <img className="header__logo" src={logo} alt="Лого"/>
            </Link>    
            {location.pathname === '/' ? (
                <div className="header__links">
                    <Link to="/sing-up" className="header__link">
                    Регистрация
                    </Link>
                    <button 
                    type = "button" 
                    className = "header__button-green"
                    onClick = {handleLogin}
                    >
                        Войти
                    </button>
                </div>  
                ) : (
                <>
                    {isMobile ? (
                        <BurgerMenu
                            pathname = {location.pathname}
                            handleProfile
                        />
                     ) : (     
                        <div className="header__links">
                            <Link 
                                to = "/movies" 
                                className = {`header__link ${location.pathname === '/movies' && 'header__link_active'}`} 
                            > 
                            Фильмы
                            </Link>
                            <Link 
                                to="/saved-movies" 
                                className = {`header__link ${location.pathname === '/saved-movies' && 'header__link_active'}`} 
                            >
                            Сохраненные фильмы
                            </Link> 
                            <button 
                            type = "button" 
                            className = "header__button"
                            onClick = {handleProfile}
                            >
                                Аккаунт
                            </button>
                        </div> 
                     )}
                </>
            )} 
        </header>
    );
}

export default Header;
