import React from 'react';
import styles from './Input.module.css'


const Input = ({id, placeholder,label,...props}) => {
  return (

      <div className={styles.wrapper}>
        <input
          id={id}
          className={styles.input}
          required
          placeholder={placeholder}
          {...props}
        />
        <label htmlFor={id}>{label}</label>

      </div>
  );
};

export default Input;