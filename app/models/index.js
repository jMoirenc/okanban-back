const List = require ('./list');
const Card = require ('./card');
const Tag = require ('./tag');

List.hasMany(Card, { as: 'cards' });
Card.belongsTo(List, { as: 'list' });


Card.belongsToMany(Tag, { as: 'tags', through: 'card_has_tag', timestamps: true, updatedAt: false });
Tag.belongsToMany(Card, { as: 'cards', through: 'card_has_tag', timestamps: true, updatedAt: false });

module.exports = {
  List,
  Card,
  Tag,
};

