const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sleep: {
    type: Number,
    required: true,
  },
  nap: {
    type: Number,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
