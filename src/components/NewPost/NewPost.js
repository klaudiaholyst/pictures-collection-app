import React from 'react';

import { Link } from 'react-router-dom';

import styles from './NewPost.module.css';

const NewPost = () => {
  return (
    <form className={styles.Form}>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <button className={styles.Button} type="submit">
          Zapisz
        </button>
      </Link>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <button className={styles.Button}>Anuluj</button>
      </Link>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="Form-URL">
          URL
        </label>
        <input
          className={styles.Input}
          type="text"
          name="Form-URL"
          id="Form-URL"
          required
        ></input>
      </div>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="Form-date">
          Data
        </label>
        <input
          className={styles.Input}
          type="date"
          name="Form-date"
          id="Form-date"
          placeholder=""
          required
        ></input>
      </div>
    </form>
  );
};

export default NewPost;
