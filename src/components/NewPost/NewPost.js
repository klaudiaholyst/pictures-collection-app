import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import styles from './NewPost.module.css';
import axiosInstance from '../../axios-posts';

const NewPost = (props) => {
  const initialState = {
    id: new Date().getTime(),
    name: '',
    url: '',
    date: '',
    place: '',
    tags: '',
  };

  const [inputState, setInputState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    axiosInstance.post('/posts.json', inputState)
      .then(response => {
        props.onPostAdded(inputState);
        setInputState(() => initialState)
      })
      .catch(error => {
        console.log(error);
        alert(`${error}. Coś poszło nie tak. Spróbuj jeszcze raz.`)
      });
    ;
  };

  const newValueHandler = (event) => {
    const newValue = event.target.value;
    setInputState((prevInputState) => ({
      ...prevInputState,
      [event.target.name]: newValue,
    }));
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
          onChange={newValueHandler}
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
          onChange={newValueHandler}
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
          onChange={newValueHandler}
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
          onChange={newValueHandler}
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
          onChange={newValueHandler}
          value={inputState.tags}
        ></input>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onPostAdded: (inputState) => dispatch({
      type: 'ADD_POST',
      payload: inputState
    })
  }
}

export default connect(null, mapDispatchToProps)(NewPost);
