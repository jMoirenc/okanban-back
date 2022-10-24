const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Card extends Model {}

Card.init({
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  position: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize, // We need to pass the connection instance  
  tableName: 'card',
});

module.exports = Card;