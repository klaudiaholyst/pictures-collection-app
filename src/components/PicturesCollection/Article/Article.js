import React, { useEffect, useState } from 'react';

import './Article.css';

import heart from '../../../assets/svg/heart-solid.svg';

const Article = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
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
  );
};

export default Article;
