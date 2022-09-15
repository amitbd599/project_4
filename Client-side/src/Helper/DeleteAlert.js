import Swal from "sweetalert2";
import {
  deleteBlogPost__Request__API,
  deleteComment__Request__API,
  deletePortfolio__Request__API,
  deleteSingleMassage__Request__API,
} from "../API/API";

export const DeleteAlertBlogPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteBlogPost__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertPortfolio = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deletePortfolio__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertSingleMassage = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteSingleMassage__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertCommentPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteComment__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
