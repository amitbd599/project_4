const express = require("express");
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware");
const userController = require("../Controllers/userController");
const blogController = require("../Controllers/blogController");
const portfolioController = require("../Controllers/portfolioController");
const commentController = require("../Controllers/commentController");
const router = express.Router();

// ======================== Admin login API ==========================

router.post("/login", userController.login);

router.post("/login-data", userController.EmailVerifyData);

router.get("/get-all-user", userController.GetAllUser);
router.post("/get-single-user", userController.GetSingleUser);

// ======================== Blog Post API ==========================

router.post(
  "/createBlogPost",
  AuthVerifyMiddleware,
  blogController.createBlogPost
);
router.get("/readBlogPost", blogController.readBlogPost);
router.delete(
  "/deleteBlogPost/:id",
  AuthVerifyMiddleware,
  blogController.deleteBlogPost
);
router.post(
  "/updateBlogPost/:id",
  AuthVerifyMiddleware,
  blogController.updateBlogPost
);
router.get("/readSingleBlogPost/:id", blogController.readSingleBlogPost);
router.post("/totalShowSingleBlog/:id", blogController.totalShowSingleBlog);

// ========================= Pagination API =============================

router.get("/product-list/:pageNo", blogController.productList);

// ======================== Project API ==========================

router.post(
  "/createPortfolio",
  AuthVerifyMiddleware,
  portfolioController.createPortfolio
);
router.get("/readPortfolio", portfolioController.readPortfolio);

router.delete(
  "/deletePortfolio/:id",
  AuthVerifyMiddleware,
  portfolioController.deletePortfolio
);

router.post(
  "/updatePortfolio/:id",
  AuthVerifyMiddleware,
  portfolioController.updatePortfolio
);

router.get("/readSinglePortfolio/:id", portfolioController.readSinglePortfolio);

// ========================= Pagination API =============================

router.get("/project-list/:pageNo", portfolioController.portfolioList);

// ======================== Send Email API ==========================

router.post("/sendMail", userController.EmailSend);
router.get("/getMail", userController.GetAllMassage);

//  ======================== Delete & Read Single Massage ==================

router.delete(
  "/deleteSingleMassage/:id",
  AuthVerifyMiddleware,
  userController.DeleteSingleMassage
);
router.get(
  "/readSingleMassage/:id",
  AuthVerifyMiddleware,
  userController.ReadSingleMassage
);

// ========================= Comment API =============================

router.post("/create-comment", commentController.createCommentPost);
router.get(
  "/get-all-comment",
  AuthVerifyMiddleware,
  commentController.readCommentPost
);
router.get(
  "/get-single-comment/:blogId",
  AuthVerifyMiddleware,
  commentController.readSingleCommentPost
);
router.post(
  "/update-comment/:id",
  AuthVerifyMiddleware,
  commentController.updateCommentPost
);
router.delete(
  "/delete-comment/:id",
  AuthVerifyMiddleware,
  commentController.deleteCommentPost
);

module.exports = router;
