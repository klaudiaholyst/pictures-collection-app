import { connect } from 'react-redux';

import {useFile} from '../../hooks/useFile'

import './Photos.css';

import heart from '../../assets/svg/heart-solid.svg';

const Photos = (props) => {
  const {files} = useFile()
  return (
    files.map((item) => {
      return (
        <article className="Article" key={item.id}>
          <div className="square"><img className="photo" src={item.url} alt={item.name} /></div>
          <p className="SingleLine">Place: {item.place}</p>
          <p className="SingleLine">Date: {item.date}</p>
          <p className="SingleLine">Tags: {item.tags}</p>
          <img src={heart} className="Heart" alt="heart" />
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
