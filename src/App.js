import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:url" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

