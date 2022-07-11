import React from 'react';
import './articles.css';

const Articles = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-containers_articles">
    <div className="gpt3__blog-containers_articles-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-containers_articles-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Articles</p>
    </div>
  </div>
);

export default Articles;