const express = require("express");
const { getUsers, getUser, deleteUser, updateUser } = require("../controller/userController");

const router = express.Router();

const { protect, adminOnly } = require("../middleware/auth");

router.get("/", getUsers);
router.get("/:id", protect, adminOnly, getUser);
router.delete("/:id", protect, adminOnly, deleteUser);
router.put("/:id", protect, adminOnly, updateUser);

module.exports = router;
