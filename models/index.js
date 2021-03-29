const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
  database: "",
  username: "",
  password: "",
  host: "",
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
