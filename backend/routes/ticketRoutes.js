const express = require("express");
const router = express.Router();
const { protectedRoutes } = require("../middleware/authMiddleware");
const noteRouter = require("./noteRoutes");
const {
  getTickets,
  getTicketById,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

router.use("/:ticketId/notes", noteRouter);

router
  .route("/")
  .get(protectedRoutes, getTickets)
  .post(protectedRoutes, createTicket);

router
  .route("/:id")
  .get(protectedRoutes, getTicketById)
  .delete(protectedRoutes, deleteTicket)
  .put(protectedRoutes, updateTicket);

module.exports = router;
