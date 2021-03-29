const express = require("express");
const { User } = require("../controllers");

const api = express.Router();

api.get("/users", User.all);
api.get("/users/:id", User.retrieve);
api.patch("/users/:id", User.patch);
// api.get("/users", (req, res, next) => {
//   User.findAll()
//     .then((instance) => res.status(200).send(instance))
//     .catch(next);
// });
// User.findOne()
//   .then((user) => {
//     res.json(user.toJSON());
//   })
//   .catch(() => {
//     res.status(500);
//   });

module.exports = { api };
