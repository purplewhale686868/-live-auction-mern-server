import Listing from "../models/Listing.js";
import Bid from "../models/Bid.js";

// createListing
export const createListing = async (req, res) => {
  try {
    const { userId, title, description, imagePath, category, bid } = req.body;

    const newListing = new Listing({
      ownerId: userId,
      title,
      description,
      imagePath,
      category,
      bid,
      winnerId: "",
    });
    const savedListing = await newListing.save();

    const newBid = new Bid({ bid, ownerId: userId, listingId: newListing._id });
    await newBid.save();

    res.status(200).json(savedListing);
  } catch (err) {
    res.status(500).json(err);
  }
};
