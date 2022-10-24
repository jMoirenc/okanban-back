const { response } = require('express');
const { List, Card, Tag } = require ('../models/index');

const cardController = {

  async associateTag(req, res) {
    try{
      const id = req.params.id;
      const tagId = req.body.tag_id;

      const card = await Card.findByPk(id, { include: 'tags' });

      if (card){
        const tag = await Tag.findByPk(tagId);
        if (tag){
          card.addTag(tagId);
          res.json(card);
        }else{
          res.status(400).json("bad tag_id");  
        }
      }else{
        res.status(404).json("card not found");
      }

    }catch(error){
      console.trace(error);
      res.status(500).json("unexpected error");
    }
  },  
}

module.exports = cardController;