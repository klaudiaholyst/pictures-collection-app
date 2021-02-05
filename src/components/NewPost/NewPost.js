import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './NewPost.module.css';

const NewPost = () => {
  const [inputState, setInputState] = useState({
    id: '',
    name: '',
    url: '',
    date: '',
    place: '',
    tags: '',
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputState);
  };
  return (
    <form className={styles.Form} onSubmit={submitHandler}>
      <button className={styles.Button} type="submit">
        Zapisz
      </button>

      <Link to="/">
        <button className={styles.Button}>Anuluj</button>
      </Link>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="name">
          Nazwa
        </label>
        <input
          className={styles.Input}
          type="text"
          name="name"
          id="name"
          value={inputState.name}
          onChange={(event) => {
            const newValue = event.target.value;
            setInputState({
              id: inputState.id,
              name: newValue,
              url: inputState.url,
              date: inputState.date,
              place: inputState.place,
              tags: inputState.tags,
            });
          }}
          required
        ></input>
      </div>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="url">
          URL
        </label>
        <input
          className={styles.Input}
          type="text"
          name="url"
          id="url"
          onChange={(event) => {
            const newValue = event.target.value;
            setInputState({
              id: inputState.id,
              name: inputState.name,
              url: newValue,
              date: inputState.date,
              place: inputState.place,
              tags: inputState.tags,
            });
          }}
          required
          value={inputState.url}
        ></input>
      </div>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="date">
          Data
        </label>
        <input
          className={styles.Input}
          type="date"
          name="date"
          id="date"
          placeholder=""
          required
          onChange={(event) => {
            const newValue = event.target.value;
            setInputState({
              id: inputState.id,
              name: inputState.name,
              url: inputState.url,
              date: newValue,
              place: inputState.place,
              tags: inputState.tags,
            });
          }}
          value={inputState.date}
        ></input>
      </div>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="place">
          Miejsce
        </label>
        <input
          className={styles.Input}
          type="text"
          name="place"
          id="place"
          onChange={(event) => {
            const newValue = event.target.value;
            setInputState({
              id: inputState.id,
              name: inputState.name,
              url: inputState.url,
              date: inputState.date,
              place: newValue,
              tags: inputState.tags,
            });
          }}
          required
          value={inputState.place}
        ></input>
      </div>
      <div className={styles.Option}>
        <label className={styles.Label} htmlFor="tags">
          Tagi
        </label>
        <input
          className={styles.Input}
          type="text"
          name="tags"
          id="tags"
          required
          onChange={(event) => {
            const newValue = event.target.value;
            setInputState({
              id: inputState.id,
              name: inputState.name,
              url: inputState.url,
              date: inputState.date,
              place: inputState.place,
              tags: newValue,
            });
          }}
          value={inputState.tags}
        ></input>
      </div>
    </form>
  );
};

export default NewPost;
