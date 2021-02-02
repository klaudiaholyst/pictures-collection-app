import React, { useEffect, useState } from 'react';
import './Article.css';
import Auxiliary from '../../../hoc/Auxiliary';
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
    <Auxiliary>
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <article className="Article" key={item.ID}>
              <img className="Picture" src={item.Image} alt={item.Name} />
              <p className="P">Miejsce wykonania: {item.Place}</p>
              <p className="P">Data: {item.Date}</p>
              <p className="P">Tagi: {item.Tags}</p>
              <img src={heart} className="Heart" alt="heart" />
            </article>
          );
        })}
    </Auxiliary>
  );
};

export default Article;
