const express = require("express");
const router = express.Router();
const Color = require("../models/color");

router.get("/color", async (req, res) => {
  try {
    const colors = await Color.find();
    res.send(colors);
  } catch (error) {
    console.log(error);
  }
});

router.post("/color", async (req, res) => {
  try {
    console.log(req.body)
    const { name, colorCode } = req.body;
    const color = await Color.insertMany({ name: name, colorCode: colorCode });
    res.send(color);
  } catch (error) {
    console.log(error);
  }
});

router.put("/color/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, colorCode } = req.body;
    const color = await Color.findOneAndUpdate(
      { _id: id },
      { name: name, colorCode: colorCode },
      { new: true }
    );
    res.send(color);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/color/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Color.deleteOne({ _id: id });
    res.send({ result: 'deleted' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
