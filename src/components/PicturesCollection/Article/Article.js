import React from 'react';

import heart from '../../../assets/svg/heart-solid.svg';

import './Article.css';

import DataContext from '../../../context/DataContext';

const Article = () => {
  return (
    <DataContext.Consumer>
      {(data) =>
        data &&
        data.length > 0 &&
        data.map((item) => {
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
      }
    </DataContext.Consumer>
  );
};

export default Article;
