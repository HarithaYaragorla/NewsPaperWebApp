import React from "react";
import { Link } from "react-router-dom";
import articles from "../ArticleItemDetails";
import "./index.css";

const ArticlesList = () => {
  return (
    <div className="articles-list-container">
      {articles.map((article) => (
        <div className="card" style={{ width: "18rem" }} key={article.id}>
          {/*<img
            className="card-img-top"
            src={article.imageUrl}
            alt={article.title}
          />*/}
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.summary}</p>
            <Link to={`/article/${article.id}`}>
              <button className="btn btn-primary">Read More....</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
