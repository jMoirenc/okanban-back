const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class List extends Model {}

List.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  position: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize, // We need to pass the connection instance  
  tableName: 'list',
});

module.exports = List;