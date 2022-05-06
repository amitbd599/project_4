import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class PageIntro extends Component {
  render(props) {
    const { title } = this.props;
    return (
      <section className="pageInfo bgImg-5">
        <div className="wrapper">
          <div className="titleBar">
            <span>
              <Link to={"/"}>Home</Link>
            </span>
            <span> &nbsp;/ &nbsp;</span>
            <span>{title}</span>
          </div>
        </div>
      </section>
    );
  }
}
