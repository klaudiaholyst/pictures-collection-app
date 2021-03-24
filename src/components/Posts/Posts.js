import { connect } from 'react-redux';

import './Posts.css';

import heart from '../../assets/svg/heart-solid.svg';

const Posts = (props) => {
  return (
    props.posts.map((item) => {
      return (
        <article className="Article" key={item.id}>
          <img className="Picture" src={item.url} alt={item.name} />
          <p className="P">Miejsce wykonania: {item.place}</p>
          <p className="P">Data: {item.date}</p>
          <p className="P">Tagi: {item.tags}</p>
          <img src={heart} className="Heart" alt="heart" />
        </article>
      );
    })
  );
};


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts);
