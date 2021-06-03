import React from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import logo from '../../images/logo.svg';
import Button from './Button/Button';

function Form(props) {

  return (
    <div className="form-container">
      <div className="form-content">
        <header className="form-header">
          <img className="form-header__logo" src={logo} alt="Лого" />
          <h2 className="form__title">{ props.title }</h2> 
        </header>
        <form
          className = "form"
          name      = { props.name }
          onSubmit  = { props.onSubmit }
        >
          <div className="form__input-block">
            { props.children }
          </div>
          <span className="form__message">{props.errorMessage}</span>
          <Button
            text={props.textSubmitBtn}
          />
        </form>
        <p className="form__text">{ props.formText } 
          <Link to= { props.linkLink } className="form__link"> { props.linkText } </Link>
        </p>
      </div>  
    </div>
  );
}

export default Form;
