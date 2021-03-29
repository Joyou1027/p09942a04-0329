const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
  database: "dbm46l3m02kkr3",
  username: "ptddkotstaneqe",
  password: "b27f22f36ea29858643589ba54cfe916fbf08699b21d15c9541968f270d53a56",
  host: "ec2-34-225-103-117.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // YOU NEED THIS
    },
  },
});

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: "janedoe",
//     birthday: new Date(1980, 6, 20),
//   });
//   console.log(jane.toJSON());
// })();

module.exports = {
  User,
};
