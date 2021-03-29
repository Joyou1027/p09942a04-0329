const { User } = require("../models");

const controller = {
  all(req, res, next) {
    User.findAll()
      .then((instance) => res.status(200).send(instance))
      .catch(next);
  },
  retrieve(req, res, next) {
    User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((instance) => res.status(200).send(instance))
      .catch(next);
  },
  patch(req, res, next) {
    const { username } = req.body;
    if (typeof username === "string") {
      User.update(
        { username },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          res.status(204).send();
        })
        .catch(next);
    } else {
      next();
    }
  },
};

module.exports = { User: controller };
