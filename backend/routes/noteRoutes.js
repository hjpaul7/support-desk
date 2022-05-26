const express = require("express");
const router = express.Router({ mergeParams: true });
const { protectedRoutes } = require("../middleware/authMiddleware");
const { getNotes, addNote } = require("../controllers/noteController");

router.route("/").get(protectedRoutes, getNotes).post(protectedRoutes, addNote);

module.exports = router;
