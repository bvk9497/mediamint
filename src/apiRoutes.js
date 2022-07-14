const express = require("express");
const router = express.Router();
const User = require("./userModel");

require("./dbconnect");

//Read
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//update
router.put("/:ID", async (req, res) => {
  let check = req.params.ID;
  console.log({ ...req.body });
  console.log(check);
  try {
    const editeduser = await User.findOneAndUpdate(
      { ID: check },
      { $set: { ...req.body } },
      { new: true }
    );
    res.json(editeduser);
  } catch (error) {
    console.log(error);
  }
});

//Create
router.post("/", async (req, res) => {
  const newuser = new User(req.body);
  try {
    const addeduser = await newuser.save();
    res.send(addeduser);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
