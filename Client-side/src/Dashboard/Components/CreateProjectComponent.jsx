import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import {
  createBlogPost__Request__API,
  portfolioCreate__Request__API,
  verifyEmail,
} from "../../API/API";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SuccessTost } from "../../Helper/FormHelper";

const CreateProjectComponent = () => {
  const [previewImg, setPreviewImg] = useState("");
  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [imgUpload, setImgUpload] = useState("");
  const [imgShowLink, setImgShowLink] = useState("");
  let { titleRef, cateRef, clientRef, durationRef, taskRef } = useRef();

  const addCategory = () => {
    let cateRefValue = cateRef.value;
    setCategory([...category, cateRefValue]);
    cateRef.value = "";
  };
  const removeCate = (value) => {
    const result = category.filter((item) => item !== value);
    setCategory(result);
  };

  const getTypeFun = (e) => {
    setType(e.target.innerHTML);
  };

  const imgUploadFun = () => {
    const formData = new FormData();
    formData.append("file", imgUpload);
    formData.append("upload_preset", "met_cifo");
    axios
      .post("https://api.cloudinary.com/v1_1/amit-js/image/upload", formData)
      .then((res) => {
        SuccessTost("Img Upload success");
        setImgShowLink(res.data["url"]);
      });
  };
  const getData = () => {
    let title = titleRef.value;
    let client = clientRef.value;
    let duration = durationRef.value;
    let task = taskRef.value;
    portfolioCreate__Request__API(
      title,
      value,
      imgShowLink,
      type,
      category,
      client,
      duration,
      task
    ).then((res) => {
      if (res === true) {
        navigate("/all-project/1");
      }
    });
  };

  const resetInputFile = () => {
    setPreviewImg("");
  };
  const preview = (e) => {
    let src = URL.createObjectURL(e.target.files[0]);
    setPreviewImg(src);
    setImgUpload(e.target.files[0]);
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "video",
    "background",
    "clean",
    "code",
    "align",
    "direction",
    "code-block",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [
        {
          color: [
            "#000000",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
        {
          background: [
            "#000000",
            "#ffffff",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
      ],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["link", "image", "video"],
      ["code", "clean", "code-block"],
    ],
  };

  return (
    <div className="createNewPostComponent">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header__text">
                  <h2>Create New Project</h2>
                </div>
              </div>
            </div>

            {/* Create New Post */}
            <div className="createNewPost">
              <div className="row">
                <div className="col">
                  <div className="post__body">
                    <div className="title">
                      <h3>PROJECT CREATE</h3>
                    </div>{" "}
                    <div className="title__box">
                      <span>Project Title:</span>
                      <input
                        type="text"
                        placeholder="Project Title"
                        ref={(input) => (titleRef = input)}
                      />
                    </div>
                    <div className="post__type">
                      <span>Project Type:</span>
                      <div className="d-flex">
                        <div className="input__item">
                          <input
                            type="radio"
                            name="input__Type"
                            id="Text"
                            value={"Text"}
                          />
                          <label htmlFor="Text" onClick={(e) => getTypeFun(e)}>
                            Text
                          </label>
                        </div>
                        <div className="input__item">
                          <input type="radio" name="input__Type" id="Image" />
                          <label htmlFor="Image" onClick={(e) => getTypeFun(e)}>
                            Image
                          </label>
                        </div>
                        <div className="input__item">
                          <input type="radio" name="input__Type" id="Audio" />
                          <label htmlFor="Audio" onClick={(e) => getTypeFun(e)}>
                            Audio
                          </label>
                        </div>
                        <div className="input__item">
                          <input type="radio" name="input__Type" id="Video" />
                          <label htmlFor="Video" onClick={(e) => getTypeFun(e)}>
                            Video
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="category__box">
                      <span>Category:</span>
                      <div className="adons">
                        <div className="input__Data">
                          <input
                            type="text"
                            placeholder="Category"
                            ref={(input) => (cateRef = input)}
                          />
                          <button onClick={addCategory} className="my__btn">
                            Add Category
                          </button>
                        </div>{" "}
                        <div className="showCategory">
                          {category.map((value, index) => (
                            <div className="inner__cat">
                              <span className="text" key={index}>
                                {value}
                              </span>
                              <span
                                class="mdi mdi-close"
                                onClick={() => removeCate(value)}
                              ></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="child__asset">
                      <div className="sub_child">
                        <span>Client:</span>
                        <input
                          type="text"
                          placeholder="Client Name"
                          ref={(input) => (clientRef = input)}
                        />
                      </div>
                      <div className="sub_child">
                        <span>Duration:</span>
                        <input
                          type="text"
                          placeholder="Duration"
                          ref={(input) => (durationRef = input)}
                        />
                      </div>
                      <div className="sub_child">
                        <span>Task:</span>
                        <input
                          type="text"
                          placeholder="Task"
                          ref={(input) => (taskRef = input)}
                        />
                      </div>
                    </div>
                    <div className="rich__text">
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        modules={modules}
                        formats={formats}
                      />
                    </div>
                    <div className="file__upload">
                      <div className="input__box">
                        <div className="box">
                          <input
                            type="file"
                            name=""
                            id="file__upload"
                            className="d-none"
                            onChange={(e) => preview(e)}
                          />
                          <label htmlFor="file__upload">Drop A File</label>
                        </div>
                        <div className="img__file">
                          <div className="inner">
                            <img
                              className="img-fluid"
                              src={previewImg}
                              alt=""
                            />
                            {previewImg.length !== 0 && (
                              <div className="close">
                                <span
                                  class="mdi mdi-close"
                                  onClick={resetInputFile}
                                ></span>
                                <button
                                  className="my__btn"
                                  onClick={imgUploadFun}
                                >
                                  Upload Img
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit__file">
                      <div>
                        <button className="my__btn__post" onClick={getData}>
                          Project Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectComponent;
