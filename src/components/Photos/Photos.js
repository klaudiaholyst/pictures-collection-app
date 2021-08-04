import { useFile } from '../../hooks/useFile';

import { database } from '../../firebase';

import styles from './Photos.module.css';

import heart from '../../assets/svg/heart-solid.svg';
import heartRed from '../../assets/svg/heart-solid-red.svg';


const Photos = (props) => {
  const { files } = useFile()

  const handleFavorite = (item) => {
    item.favorite ? database.files.doc(item.id).update({
      favorite: false
    }) : database.files.doc(item.id).update({
      favorite: true
    })
  }

  const Article = ({ item }) => {
    return (
      <article className={styles.Article} key={item.id}>
        <div className={styles.square}><img className={styles.photo} src={item.url} alt={item.name} /></div>
        <p className={styles.SingleLine}><span className={styles.info}>Name: </span>{item.name}</p>
        <p className={styles.SingleLine}><span className={styles.info}>Place: </span>{item.place}</p>
        <p className={styles.SingleLine}><span className={styles.info}>Date: </span>{item.date}</p>
        <p className={styles.SingleLine}><span className={styles.info}>Tags: </span>{item.tags}</p>
        <img src={item.favorite ? heartRed : heart} className={styles.Heart} alt="heart" onClick={() => handleFavorite(item)} />
      </article>
    )
  }

  if (props.onlyFavorite) {
    return (
      files.filter(item => item.favorite === true)
        .map(item => <Article item={item} />)
    );
  } else {
    return (
      files.map((item) => <Article item={item} />)
    )
  }
};

export default Photos;
