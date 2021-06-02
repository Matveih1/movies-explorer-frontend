import React from 'react';
import './Input.css';

function Input (props) {

  return (
    <label className={`label ${props.title && 'label_type_form'}`}>
      <span className="label__title">
        {props.title}
      </span>
      <input
        className = "input"
        type      = {props.type}
        name      = {props.name}
        required  = {props.required}
        onChange  = {props.onChange}
        minLength = {props.minLength} 
        maxLength = {props.maxLength}
      />
      {
        props.isError &&
        (<span className="input__error">{props.errorMessage}</span>)
      }
    </label>
   );
}

export default Input;
