import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import articles from "../ArticleItemDetails";
import "./index.css";

const ArticleItem = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  return (
    <Container className="article-item-container">
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <p>Author: {article.author}</p>
          <p>Published Date: {article.publishedDate}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArticleItem;
