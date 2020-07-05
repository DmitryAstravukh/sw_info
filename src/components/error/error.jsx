import React from 'react';
import s from './error.module.css';
import errorImg from './error.png';

const Error = () => {
  return(
    <div className={s.error_container}>
      <img src={errorImg} alt="error"/>
      <span>Sorry, something went wrong</span>
    </div>
  )
}

export default Error;