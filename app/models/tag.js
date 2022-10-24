const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Tag extends Model {}

Tag.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
}, {
  sequelize, // We need to pass the connection instance  
  tableName: 'tag',
});

module.exports = Tag;