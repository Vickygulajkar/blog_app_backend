const express = require("express");
const { createPost, getPosts, getPost, updatePost, deletePost } = require("../controller/postController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", protect, createPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
