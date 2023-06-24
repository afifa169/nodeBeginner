const express = require("express");
const app = express(); //app is  basically a express application
const router = express.Router();
const User = require("./src/models/userSchema");
const port = 5000;

const userController = require("./src/controller/userController");

app.use(express.json()); //middleware
app.use("/api/user", userController);
// app.use(express.urlencoded());

// app.use((req, res, next) => {
//   console.log("Inside middleware: ", req.headers["content-type"]);
//   if (req.headers["content-type"] == "application/json") {
//     next();
//   } else {
//     res.send("bad request");
//   }
// });

//used to retrieve info from the given server using a given url

// app.get("/api/:id", async (req, res) => {
//   try {
//     console.log("Request Params :", req.params["id"]);
//     console.log("Control is here : GEt");
//     let fetchedUser = await User.findById(req.params.id);
//     res.json(fetchedUser);
//   } catch (err) {
//     console.log(err);
//     res.send("Bad request");
//   } // res.send(`Get response data: ${req.params["id"]}`);
// });

//a post request is used to send data to the server. ex: customer information, file upload etc. using HTML forms

// app.post("/api/user", async (req, res) => {
//   try {
//     console.log("Control is here : POST");
//     console.log("Request body", req.body);
//     let user = new User(req.body);
//     let savedUser = await user.save();
//     console.log("user added successfully");
//     res.json(savedUser);
//   } catch (err) {
//     console.log(err);
//   }
// });

// replaces all current representations of the target resources with the uploaded content

// app.put("/api/:id", (req, res) => {
//   console.log("Control is here : PUT");
// });

// removes the current representations of the target resources given by a url.

// app.delete("/api/:id", (req, res) => {
//   console.log("Control is here : DELETE");
// });

// connection to mongobd

const mongoose = require("mongoose"); //B49n3LKVOjcSBhQ1

const db_url =
  "mongodb+srv://Afifa:B49n3LKVOjcSBhQ1@todoapp.tiaogll.mongodb.net/?retryWrites=true&w=majority";
async function connectDb() {
  try {
    await mongoose.connect(db_url);
    console.log("Connection successful");
  } catch (err) {
    console.log(err);
  }
}

app.listen(port, () => {
  connectDb();
  console.log("server listening on port", port);
});

//server
