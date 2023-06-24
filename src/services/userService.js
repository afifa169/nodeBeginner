const User = require("../models/userSchema");

async function fetchUser(userId) {
  try {
    let fetchedUser = await User.findById(userId);
    return fetchedUser;
  } catch {
    throw err;
  }
}

async function createUser(incomingUser) {
  try {
    let user = await User(incomingUser);
    let savedUser = await user.save();
    console.log("User added successfully");
    return savedUser;
  } catch (err) {
    throw err;
  }
}

async function updateUser(userId, update) {
  try {
    let updatedUser = await User.findByIdAndUpdate(userId, update);
    console.log("updated user");
    // res.send(updatededUser);
    return updatedUser;
  } catch (err) {
    throw err;
  }
}

async function deleteUser(userId) {
  try {
    console.log("deleteuser fuction");
    let deletedUser = await User.findByIdAndDelete(userId);
    // if (!userId) {
    //   return ;
    // }
    return deletedUser;
  } catch (err) {
    throw err;
  }
}

module.exports = { fetchUser, createUser, updateUser, deleteUser };
