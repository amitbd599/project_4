import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { single_Massage__Request__API } from "../../API/API";

const SingleMassageComponents = () => {
  let param = useParams();

  useEffect(() => {
    single_Massage__Request__API(param.id);
  }, []);
  const singleMassageData = useSelector(
    (state) => state.AllMassageData.singleData
  );
  return (
    <div className="singleMassageComponents">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header__text">
                  <h2>Massage From "{singleMassageData.name}"</h2>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <div className="main__body">
                  <span className="Name">
                    Name: <strong>{singleMassageData.name}</strong>
                  </span>
                  <span className="Subject">
                    Subject: <strong>{singleMassageData.subject}</strong>
                  </span>
                  <span className="Email">
                    Subject: <strong> {singleMassageData.email}</strong>
                  </span>
                  <span className="Date">
                    Date: <strong>{singleMassageData.createdDate}</strong>
                  </span>
                  <span className="Body">{singleMassageData.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMassageComponents;
