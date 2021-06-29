import {useFile} from '../../hooks/useFile'

import styles from './Photos.module.css';

import heart from '../../assets/svg/heart-solid.svg';

const Photos = () => {
  const {files} = useFile()
  return (
    files.map((item) => {
      return (
        <article className={styles.Article} key={item.id}>
          <div className={styles.square}><img className={styles.photo} src={item.url} alt={item.name} /></div>
          <p className={styles.SingleLine}><span className={styles.info}>Name: </span>{item.name}</p>
          <p className={styles.SingleLine}><span className={styles.info}>Place: </span>{item.place}</p>
          <p className={styles.SingleLine}><span className={styles.info}>Date: </span>{item.date}</p>
          <p className={styles.SingleLine}><span className={styles.info}>Tags: </span>{item.tags}</p>
          <img src={heart} className={styles.Heart} alt="heart" />
        </article>
      );
    })
  );
};

export default Photos;
