const express = require("express");
const router = express.Router();

const User = require("../models/userSchema");
const userService = require("../services/userService");

router.get("/fetch/:id", async (req, res) => {
  try {
    console.log("Request Params :", req.params["id"]);
    console.log("Control is here : GEt");

    let fetchedUser = await userService.fetchUser(req.params["id"]);
    res.json(fetchedUser);
  } catch (err) {
    console.log(err);
    res.send("Bad request");
  }
});

//a post request is used to send data to the server. ex: customer information, file upload etc. using HTML forms

router.post("/add", async (req, res) => {
  try {
    console.log("Control is here : POST");
    console.log("Request body", req.body);
    let savedUser = await userService.createUser(req.body);
    res.json(savedUser);
  } catch (err) {
    console.log(err);
  }
});

// replaces all current representations of the target resources with the uploaded content

router.put("/update/:id", async (req, res) => {
  console.log("Request Params :", req.params["id"]);
  console.log("Control is here : PUT");

  let updatedUser = await userService.updateUser(req.params["id"], req.body);
  res.json(updatedUser);
});

// removes the current representations of the target resources given by a url.

router.delete("/delete/:id", async (req, res) => {
  console.log("Control is here : DELETE");
  console.log("Request Params :", req.params["id"]);

  let deletedUser = await userService.deleteUser(req.params["id"]);
  res.json(deletedUser);
});

module.exports = router;
