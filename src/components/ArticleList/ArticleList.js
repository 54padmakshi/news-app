import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
