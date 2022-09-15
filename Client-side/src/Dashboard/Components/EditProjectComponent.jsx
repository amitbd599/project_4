import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { updatePortfolioPost__Request__API, verifyEmail } from "../../API/API";
import { SuccessTost } from "../../Helper/FormHelper";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
const EditProjectComponent = () => {
  const SinglePortfolioData = useSelector(
    (state) => state.SinglePortfolioData.data
  );
  let navigate = useNavigate();

  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
    if (SinglePortfolioData.length === 0) {
      navigate("/all-project");
    }
  }, []);

  const [value, setValue] = useState(SinglePortfolioData.description);
  const [type, setType] = useState(SinglePortfolioData.type);
  const [category, setCategory] = useState(SinglePortfolioData.category);

  const [imgUpload, setImgUpload] = useState("");
  const [imgShowLink, setImgShowLink] = useState(SinglePortfolioData.img);
  let { titleRef, cateRef } = useRef();

  const [previewImg, setPreviewImg] = useState();

  const addCategory = () => {
    let cateRefValue = cateRef.value;
    setCategory([...SinglePortfolioData.category, cateRefValue]);
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
  const getData = (id) => {
    let title = titleRef.value;
    updatePortfolioPost__Request__API(
      title,
      value,
      imgShowLink,
      type,
      category,
      id
    ).then((res) => {
      if (res === true) {
        navigate("/all-project");
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
    <div className="createProjectComponent">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header__text">
                  <h2>Edit Project</h2>
                </div>
              </div>
            </div>
            {/* Create New Post */}
            <div className="createNewPost">
              <div className="row">
                <div className="col">
                  <div className="post__body">
                    <div className="title">
                      <h3>PROJECT EDIT</h3>
                    </div>{" "}
                    <div className="title__box">
                      <span>Project Title:</span>
                      <input
                        type="text"
                        placeholder="Project Title"
                        ref={(input) => (titleRef = input)}
                        defaultValue={SinglePortfolioData.title}
                      />
                    </div>
                    <div className="post__type">
                      <span>Type:</span>
                      <div className="d-flex">
                        <div className="input__item">
                          {type === "Text" ? (
                            <input
                              type="radio"
                              name="input__Type"
                              id="Text"
                              checked
                            />
                          ) : (
                            <input type="radio" name="input__Type" id="Text" />
                          )}

                          <label htmlFor="Text" onClick={(e) => getTypeFun(e)}>
                            Text
                          </label>
                        </div>
                        <div className="input__item">
                          {type === "Image" ? (
                            <input
                              type="radio"
                              name="input__Type"
                              id="Image"
                              checked
                            />
                          ) : (
                            <input type="radio" name="input__Type" id="Image" />
                          )}

                          <label htmlFor="Image" onClick={(e) => getTypeFun(e)}>
                            Image
                          </label>
                        </div>
                        <div className="input__item">
                          {type === "Audio" ? (
                            <input
                              type="radio"
                              name="input__Type"
                              id="Audio"
                              checked
                            />
                          ) : (
                            <input type="radio" name="input__Type" id="Audio" />
                          )}

                          <label htmlFor="Audio" onClick={(e) => getTypeFun(e)}>
                            Audio
                          </label>
                        </div>
                        <div className="input__item">
                          {type === "Video" ? (
                            <input
                              type="radio"
                              name="input__Type"
                              id="Video"
                              checked
                            />
                          ) : (
                            <input type="radio" name="input__Type" id="Video" />
                          )}

                          <label htmlFor="Video" onClick={(e) => getTypeFun(e)}>
                            Video
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="category__box">
                      <span>Category:</span>
                      <div className="adons">
                        <div>
                          <input
                            type="text"
                            ref={(input) => (cateRef = input)}
                          />
                          <button onClick={addCategory}>Add Category</button>
                        </div>{" "}
                        <div className="showCategory">
                          {category?.map((value, index) => (
                            <div>
                              <button key={index}>{value}</button>
                              <span
                                class="mdi mdi-close"
                                onClick={() => removeCate(value)}
                              ></span>
                            </div>
                          ))}
                        </div>
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
                        <input
                          type="file"
                          name=""
                          id="file__upload"
                          className="d-none"
                          onChange={(e) => preview(e)}
                        />
                        <label htmlFor="file__upload">Drop A File</label>
                        <div className="img__file">
                          <img className="img-fluid" src={previewImg} alt="" />
                        </div>
                        {previewImg !== "" && (
                          <div className="close">
                            <span
                              class="mdi mdi-close"
                              onClick={resetInputFile}
                            ></span>
                            <button className="my__btn" onClick={imgUploadFun}>
                              Upload Img
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="submit__file">
                      <button
                        className="my__btn__post"
                        onClick={() => getData(SinglePortfolioData._id)}
                      >
                        Update Post
                      </button>
                    </div>
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

export default EditProjectComponent;
