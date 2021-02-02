import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PicturesCollection.module.css';
import Article from './Article/Article';

const PicturesCollection = () => {
  return (
    <div>
      <Link
        to={{
          pathname: '/new-post',
          hash: 'submit',
          search: '?quick-submit=true',
        }}
        style={{ textDecoration: 'none' }}
        className={styles.Button}
      >
        Dodaj nowe
      </Link>
      <main className={styles.PicturesCollection}>
        {' '}
        <Article />{' '}
      </main>
      ;
    </div>
  );
};
export default PicturesCollection;
