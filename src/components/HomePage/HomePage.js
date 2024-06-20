import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setCategory, setPage } from '../../redux/articleSlice';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';
import './HomePage.css';



const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, selectedCategory, currentPage, totalPages } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles(selectedCategory));
  }, [dispatch, selectedCategory, currentPage]);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1)); // Reset to the first page when the category changes
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="homepage">
      <div className="category-buttons">
        {['general', 'business', 'technology', 'entertainment'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && <ArticleList articles={articles} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;

