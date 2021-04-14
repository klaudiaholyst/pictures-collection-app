import { connect } from 'react-redux';

import './Photos.css';

import heart from '../../assets/svg/heart-solid.svg';

const Photos = (props) => {
  return (
    props.photos.map((item) => {
      return (
        <article className="Article" key={item.id}>
          <img className="Photo" src={item.url} alt={item.name} />
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
