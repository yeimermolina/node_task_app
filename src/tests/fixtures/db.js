const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Task = require("../../models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "user",
  email: "yeimer.molina2@gmail.com",
  password: "1234567",
  tokens: [
    {
      token: jwt.sign(
        {
          _id: userOneId
        },
        process.env.JWT_SECRET
      )
    }
  ]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "user two",
  email: "user@gmail.com",
  password: "1234567",
  tokens: [
    {
      token: jwt.sign(
        {
          _id: userTwoId
        },
        process.env.JWT_SECRET
      )
    }
  ]
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "Play Video Games",
  completed: false,
  owner: userOne._id
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Gym",
  completed: true,
  owner: userOne._id
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "Homework",
  completed: true,
  owner: userTwo._id
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  setupDatabase,
  userOne,
  userOneId,
  userTwoId,
  userTwo,
  taskOne,
  taskTwo,
  taskThree
};
