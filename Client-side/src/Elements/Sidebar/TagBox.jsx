import React, { Component } from "react";
import { Link } from "react-router-dom";

class TagBox extends Component {
  render() {
    return (
      <div className="tagBox">
        <div className="tagBoxInner">
          <h2>Recent News</h2>
          <div className="tagBoxInner_Items">
            <ul>
              <li>
                <Link to={"#"}>Agency</Link>
              </li>
              <li>
                <Link to={"#"}>Digital</Link>
              </li>
              <li>
                <Link to={"#"}>web Design</Link>
              </li>
              <li>
                <Link to={"#"}>UX/UI</Link>
              </li>
              <li>
                <Link to={"#"}>Strategy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TagBox;
