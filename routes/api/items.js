const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Item = require("../../models/Item");

router.get("/", (req, res) => {
  Item.find({ user_id: req.query.userId })
    .sort({ date: 1 })
    .then((items) => res.json(items));
});

router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    user_id: req.body.user_id,
    sleep: req.body.sleep,
    nap: req.body.nap,
  });

  newItem.save().then((item) => res.json(item));
});

router.post("/:id", auth, (req, res) => {
  let filter = { _id: req.params.id };

  Item.findOneAndUpdate(
    filter,
    { nap: req.body.nap },
    { new: true, useFindAndModify: false }
  ).then((item) => {
    res.json(item);
  });
});

router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
