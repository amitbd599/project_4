import React, { Component } from "react";
import { Link } from "react-router-dom";

const RecentNews = ({ BlogData }) => {
  let SliceBlogData = BlogData.slice(0, 3);
  return (
    <div className="recentNews">
      <div className="newsData">
        <div className="newsData_inner">
          <h2>Recent News</h2>

          {SliceBlogData.map((data, index) => (
            <div className="item" key={index}>
              <div className="img w-25">
                <img className="img-fluid" src={data.img} alt="" />
              </div>
              <div className="w-75">
                <Link className="headingText " to={`/blog-details/${data._id}`}>
                  {data.title.split(" ").slice(0, 5).join(" ")} ...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
