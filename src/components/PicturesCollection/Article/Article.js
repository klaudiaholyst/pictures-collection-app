import React from 'react';
import './Article.css';
import heart from '../../../assets/svg/heart-solid.svg';

const Article = () => {

return (
<article className="Article">
<img className="Picture" src="https://cdn.pixabay.com/photo/2021/01/10/12/00/road-5904909_1280.jpg" alt="road by the sea"/>
<p className="P">Data: 19.01.2021</p>
<p className="P">Miejsce wykonania: XYZ</p>
<p className="P">Tagi: #zachódsłońca #krajobraz</p>
<img src={heart} className="Heart"  alt="heart"/>
</article>
)
};
export default Article;