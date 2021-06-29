import { connect } from 'react-redux';

import {useFile} from '../../hooks/useFile'

import styles from './Photos.module.css';

import heart from '../../assets/svg/heart-solid.svg';

const Photos = (props) => {
  const {files} = useFile()
  return (
    files.map((item) => {
      return (
        <article className={styles.Article} key={item.id}>
          <div className={styles.square}><img className={styles.photo} src={item.url} alt={item.name} /></div>
          <p className={styles.SingleLine}>Place: {item.place}</p>
          <p className={styles.SingleLine}>Date: {item.date}</p>
          <p className={styles.SingleLine}>Tags: {item.tags}</p>
          <img src={heart} className={styles.Heart} alt="heart" />
        </article>
      );
    })
  );
};


const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Photos);
