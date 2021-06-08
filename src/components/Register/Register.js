import React from 'react';

import './Register.css';
import Input from '../Form/Input/Input';
import Form from '../Form/Form';

function Register(props) {

  const initialData = {
    email: '',
    password: '',
    name: '',
  }

  const [data, setData] = React.useState(initialData);
  
  function handleChange(e) {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value,
    }));
  }

  function resetForm() {
    // setData(initialData);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if (!data.email || !data.password){
      //можем сообщить, что поля пустые
      return;
    }

    props.onRegister(data)
      .then(resetForm)
      .catch(err => console.log(err));
  } 

  return (
      <Form 
        name = "login"
        onSubmit = {handleSubmit}
        title = "Добро пожаловать!"
        textSubmitBtn = "Зарегестрироваться"
        formText = "Уже зарегистрированы?"
        linkText = "Войти"
        linkLink = "/sing-in"
      >   
        <Input 
          title       = "Имя"
          name        = "name" 
          type        = "text" 
          value       = {data.email}
          required    = {true} 
          onChange    = {handleChange} 
        />

        <Input 
          title       = "E-mail"
          name        = "email" 
          type        = "email" 
          value       = {data.email}
          required    = {true} 
          onChange    = {handleChange} 
        />

        <Input 
          title       = "Пароль"
          name        = "password" 
          type        = "password" 
          value       = {data.password}
          required    = {true}
          minLength   = "2" 
          maxLength   = "40"
          onChange    = {handleChange} 
        />
      </Form>
  )
}

export default Register;
