import axios from "axios";
import { ErrorTost, SuccessTost } from "../Helper/FormHelper";
import {
  getToken,
  setEmail,
  setImg,
  setPassword,
  setToken,
} from "../Helper/SessionHelper";
import { loadMassageData } from "../Redux/stateSlice/AllMassageSlicer";
import {
  commentData,
  loadData,
  paginationData,
  totalData,
} from "../Redux/stateSlice/BlogDataSlicer";
import { hideLoader, showLoader } from "../Redux/stateSlice/LoaderSettingSlice";
import {
  loadPortfolioData,
  paginationPortfolioData,
  totalPortfolioData,
} from "../Redux/stateSlice/PortfolioDataSlice";
import { getAllUser, getSingleUser } from "../Redux/stateSlice/ProfileSlice";
import { loadSingleData } from "../Redux/stateSlice/SingleBlogDataSlicer";
import { loadSinglePortfolioData } from "../Redux/stateSlice/SinglePortfolioDataSlicer";
import store from "../Redux/Store/Store";

// const BaseURL = "https://rest-api-portfolio-main.amitjs.com/api/v1";
const BaseURL = "http://192.168.0.105:5000/api/v1";

const TokenData = { headers: { Token: getToken() } };

//! ==================  Login API ===================
export const login__Request__API = async (email, password) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/login";
  let postBody = {
    email: email,
    password: password,
  };

  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "Success") {
        setToken(result.data["token"]);
        setEmail(email);
        setPassword(password);

        SuccessTost("Login Success!");
        return true;
      } else {
        ErrorTost("Login Fail!");
        return false;
      }
    } else {
      ErrorTost("Login Fail!");
      return false;
    }
  } catch (e) {
    ErrorTost("Login Fail!");
    return false;
  }
};

//! ================== Get All User ==================

export const Get_All_User_API = async () => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-all-user";

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "Success") {
        store.dispatch(getAllUser(result.data["data"]));
        return true;
      } else {
        ErrorTost("Something is wrong!");
        return false;
      }
    } else {
      ErrorTost("Something is wrong!!");
      return false;
    }
  } catch (e) {
    ErrorTost("Something is wrong!!!");
    return false;
  }
};
//! ================== Get Single User ==================

export const Get_Single_User_API = async (email) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-single-user";
  console.log(email);
  let postBody = {
    email: email,
  };
  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "Success") {
        store.dispatch(getSingleUser(result.data["data"][0]));
        return true;
      } else {
        ErrorTost("Something is wrong!");
        return false;
      }
    } else {
      ErrorTost("Something is wrong!!");
      return false;
    }
  } catch (e) {
    ErrorTost("Something is wrong!!!");
    return false;
  }
};

//! ================== Verify Email ==================

export const verifyEmail = async (email, password) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/login-data";

  let postBody = {
    email: email,
    password: password,
  };
  // debugger;
  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "Unauthorized") {
        ErrorTost("Unauthorized! Please Login Again.");
        return true;
      } else {
        setImg(result.data["data"]);
        return false;
      }
    } else {
      ErrorTost("Something is wrong!");
      return false;
    }
  } catch (e) {}
};

//! ================== Create Blog Post API ====================
export const createBlogPost__Request__API = async (
  title,
  description,
  img,
  type,
  category
) => {
  let URL = BaseURL + "/createBlogPost";
  store.dispatch(showLoader());
  let postBody = {
    title: title,
    img: img,
    type: type,
    category: category,
    description: description,
    show: 0,
    author: "admin",
  };
  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Create Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== Get All Blog Post API ===================
export const readBlogPost__Request__API = async () => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/readBlogPost";

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ================== Get All Blog Post by Pagination API ===================
export const blogPagination__Request__API = async (pageNo) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/product-list/" + pageNo;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationData(result.data["data"][0]["Row"]));
      store.dispatch(totalData(result.data["data"][0]["Total"][0]["count"]));

      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ================== Update Blog Post API  =======================
export const updateBlogPost__Request__API = async (
  title,
  description,
  imgShowLink,
  type,
  category,
  id
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/updateBlogPost/" + id;
  let postBody = {
    title: title,
    img: imgShowLink,
    type: type,
    category: category,
    description: description,
    author: "admin",
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Update Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! =================== Single Blog Post API =======================

export const singleBlogPost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/readSingleBlogPost/" + id;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadSingleData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== Delete Blog Post API ======================

export const deleteBlogPost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/deleteBlogPost/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== Comment Update Post API =====================

export const comment__Request__API = async (id, name, email, description) => {
  let URL = BaseURL + "/comment/" + id;

  store.dispatch(showLoader());

  try {
    let postBody = {
      comment: {
        name: name,
        email: email,
        description: description,
        photo: "",
      },
    };
    const result = await axios.post(URL, postBody);
    console.log(result);

    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};
//! =================== showReader Update Post API ====================

export const showReader__Request__API = async (id, show) => {
  let URL = BaseURL + "/totalShowSingleBlog/" + id;

  try {
    let postBody = {
      show: show,
    };
    const result = await axios.post(URL, postBody);

    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== Comment Show Dashboard =======================

export const commentShowDashboard = async () => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/all-comment";

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(commentData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ==================== Portfolio create Post API ===================

export const portfolioCreate__Request__API = async (
  title,
  description,
  img,
  type,
  category
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/createPortfolio";
  let postBody = {
    title: title,
    img: img,
    type: type,
    category: category,
    description: description,
    show: 0,
    author: "admin",
  };
  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ==================== Get All Portfolio Post API ===================
export const readPortfolioPost__Request__API = async () => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/readPortfolio";

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadPortfolioData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ==================== Update Portfolio Post API ====================
export const updatePortfolioPost__Request__API = async (
  title,
  description,
  img,
  type,
  category,
  id
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/updatePortfolio/" + id;
  let postBody = {
    title: title,
    description: description,
    img: img,
    type: type,
    category: category,
    id: id,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Update Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ===================== Single Portfolio Post API ====================

export const singlePortfolioPost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/readSinglePortfolio/" + id;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadSinglePortfolioData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//!====================== Delete Portfolio Post API =====================

export const deletePortfolio__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/deletePortfolio/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ================ Get All Portfolio Post by Pagination API ================
export const portfolioPagination__Request__API = async (pageNo) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/portfolio-list/" + pageNo;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationPortfolioData(result.data["data"][0]["Row"]));
      store.dispatch(
        totalPortfolioData(result.data["data"][0]["Total"][0]["count"])
      );

      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//! ================== Send Mail API ======================
export const sendEmail = async (name, email, EmailText, EmailSubject) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/sendMail";
  let postBody = {
    name: name,
    subject: EmailSubject,
    email: email,
    massage: EmailText,
  };
  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong2");
    store.dispatch(hideLoader());
    return false;
  }
};

// ! Get All Mail
export const getMail = async () => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/getMail";
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadMassageData(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong2");
    store.dispatch(hideLoader());
    return false;
  }
};
