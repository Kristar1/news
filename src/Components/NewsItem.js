import React, { Component } from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://westernnews.media.clients.ellingtoncms.com/img/photos/2018/08/07/Breaking_news_red.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn  btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
