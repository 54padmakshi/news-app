import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { url } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const decodedUrl = decodeURIComponent(url);
    const fetchedArticle = articles.find((art) => art.url === decodedUrl);
    setArticle(fetchedArticle);
  }, [url, articles]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <h2 className="article-title">{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="article-image" />
      )}
      <div className="article-content">
        <p className="article-author">{article.author}</p>
        <p className="article-published">{new Date(article.publishedAt).toLocaleString()}</p>
        <p className="article-description">{article.description}</p>
        <p className="article-content">{article.content}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ArticleDetail;
