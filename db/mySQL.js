const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("student", "admin", "ztyzXHHb", {
  host: "mysql-153689-0.cloudclusters.net",
  port: "19899",
  dialect: "mysql",
});

module.exports = sequelize;