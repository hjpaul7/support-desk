import axios from "axios";

const API_URL = "/api/tickets";

// Create ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, ticketData, config);

  return res.data;
};

// Get user tickets
const getUserTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

// Get single ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(`${API_URL}/${ticketId}`, config);

  return res.data;
};

// Get all tickets
const getAllTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

// Close ticket
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.put(
    `${API_URL}/${ticketId}`,
    { status: "closed" },
    config
  );

  return res.data;
};

const ticketService = {
  createTicket,
  getUserTickets,
  getTicket,
  getAllTickets,
  closeTicket,
};

export default ticketService;
