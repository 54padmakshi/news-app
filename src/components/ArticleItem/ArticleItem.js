import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleItem.css';



const ArticleItem = ({ article }) => {
  return (
    <div className="article-item">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="article-image" />
      )}
      <div className="article-content">
        <h2 className="article-title">
          <Link to={`/article/${encodeURIComponent(article.url)}`}>{article.title}</Link>
        </h2>
        <p className="article-summary">{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleItem;


