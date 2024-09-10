import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/home";
import ArticleList from "./pages/articleList";
import Article from "./pages/article";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="navContainer">
          <li>
            <NavLink className="navElement" to="/">
              Главная страница
            </NavLink>
          </li>
          <li>
            <NavLink className="navElement" to="/articles">
              Статьи
            </NavLink>
          </li>
          <li>
            <NavLink className="navElement" to="/about">
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink className="navElement" to="/contact">
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/about" element={<div>О нас</div>} />
        <Route path="/contact" element={<div>Контакты</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
