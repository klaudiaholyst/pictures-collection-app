import React from 'react';

import { Link } from 'react-router-dom';

import Posts from '../Posts/Posts';

import styles from './PostsManager.module.css';

const PostsManager = () => {
  return (
    <div>
      <Link
        to='/new-post'
        style={{ textDecoration: 'none' }}
        className={styles.Button}
      >
        Dodaj nowe
      </Link>
      <main className={styles.PostsManager}>
        <Posts />
      </main>
    </div>
  );
};
export default PostsManager;
