import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory,fetchArticles } from '../../redux/articleSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(state => state.articles);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setCategory(category));
    dispatch(fetchArticles(category));
  };

  return (
    <header className="header">
      <h1 className="title">News App</h1>
      <select 
        className="category-select" 
        value={selectedCategory} 
        onChange={handleCategoryChange}
      >
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </header>
  );
};

export default Header;
