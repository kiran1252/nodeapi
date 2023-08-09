const express = require("express");
const router = express.Router();

const {
  getVendor,
  addUpdateVendor,
  getVendorId,
} = require("../controllers/vendors");

router.get("/", getVendor);
router.post("/", addUpdateVendor);
router.get("/:id", getVendorId);

module.exports = router;
