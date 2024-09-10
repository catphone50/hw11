import React from "react";

const ArticleList = () => {
  const articles = [
    { id: 1, title: "Article 1", link: "/article/1" },
    { id: 2, title: "Article 2", link: "/article/2" },
    { id: 3, title: "Article 3", link: "/article/3" },
  ];

  return (
    <div>
      <h1>Статьи</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.link}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
