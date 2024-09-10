import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();
  const article = {
    id: articleId,
    title: `Article ${articleId}`,
    content: `This is the content of article ${articleId}`,
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
