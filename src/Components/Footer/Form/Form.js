import React from 'react';
import styles from './Form.module.css'
import Input from "../../Input/Input";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input type={'text'} label={'Name'} id={'Name'}/>
      <Input type={'email'} label={'Email'} id={'Email'}/>
      <Input type={'text'} label={'Phone'} id={'Phone'}/>
      <button className={styles.button}>Contact Us</button>
    </form>
  );
};

export default Form;