import React from "react";

const CommentComponent = () => {
  return (
    <div className="allPostComponent">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="myTable table-responsive">
                  <table>
                    <tr>
                      <th style={{ width: "2%" }}>No:</th>
                      <th style={{ width: "20%" }}>Blog Title</th>
                      <th style={{ width: "23%" }}>Comment</th>
                      <th style={{ width: "10%" }}>Name</th>
                      <th style={{ width: "10%" }}>Email</th>
                      <th style={{ width: "10%" }}>Status</th>
                      <th style={{ width: "5%" }}>Date</th>
                      <th style={{ width: "20%" }}>Action</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        JavaScript & The spread operator || 4 practical examples
                      </td>
                      <td>
                        JavaScript & The spread operator || 4 practical examples
                      </td>
                      <td>Amit Biswas</td>
                      <td>amitbd599@gmail.com</td>{" "}
                      <td>
                        {/* <span className="text-warning">pending</span> */}
                        <span className="text-success font-weight-bold">
                          Approve
                        </span>
                      </td>
                      <td>12/12/2022</td>
                      <td className="button">
                        <span>
                          <button className="edit">Edit</button>
                        </span>
                        <span>
                          <button className="delete">Delete</button>
                        </span>
                      </td>
                    </tr>
                  </table>
                  <div className="pagination">
                    <button>1</button>
                    <button>1</button>
                    <button>1</button>
                    <button>1</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
