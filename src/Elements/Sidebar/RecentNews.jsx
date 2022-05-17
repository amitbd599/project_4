import React, { Component } from "react";

export default class RecentNews extends Component {
  render() {
    return (
      <div className="recentNews">
        <div className="newsData">
          <div className="inner">
            <h2>Recent News</h2>

            <div className="item">
              <div className="img">
                <img
                  className="img-fluid"
                  src="/assets/images/singleBlog/tumb1.jpg"
                  alt=""
                />
              </div>
              <div>
                <a className="headingText" href="#">
                  Designing Better Links For Websites
                </a>

                <p>By Admin</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  className="img-fluid"
                  src="/assets/images/singleBlog/tumb2.jpg"
                  alt=""
                />
              </div>
              <div>
                <a className="headingText" href="#">
                  Designing Better Links For Websites
                </a>
                <p>By Admin</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  className="img-fluid"
                  src="/assets/images/singleBlog/tumb3.jpg"
                  alt=""
                />
              </div>
              <div>
                <a className="headingText" href="#">
                  Designing Better Links For Websites
                </a>
                <p>By Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
