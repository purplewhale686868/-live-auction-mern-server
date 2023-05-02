const mongoose = require("mongoose");

// cart

const WonAuctionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    // array of productID
    products: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WonAuction", WonAuctionSchema);
