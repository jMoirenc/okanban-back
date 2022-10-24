require('dotenv').config();
const { List, Card, Tag }  = require('./app/models');


(async () => {  


  const lists = await List.findAll({ include: { model: Card, as: 'cards' }});
  console.log(lists);

  const cards = await Card.findAll({ include: { model: Tag, as: 'tags' }});

  for (card of cards){    
    console.log(card.content);
    console.log(card.color);
    
    for (tag of card.tags){    
      console.log(tag.name);
    }
  }
})();