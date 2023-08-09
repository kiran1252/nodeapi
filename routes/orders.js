const express = require("express");
const router = express.Router();

const {
  getOrder,
  addOrder,
  getOrderId,
  deleteOrder,
  updateOrder,
} = require("../controllers/orders");

router.get("/", getOrder);
router.post("/", addOrder);
router.get("/:id", getOrderId);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

module.exports = router;
