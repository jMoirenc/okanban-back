const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI, {
  define: {
    underscored: true,
  },
});

module.exports = sequelize;
