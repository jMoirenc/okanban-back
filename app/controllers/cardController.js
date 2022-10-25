const { response } = require('express');
const { List, Card, Tag } = require ('../models/index');

const cardController = {

  async associateTag(req, res) {
    try{
      const id = req.params.id;
      const tagId = req.body.tag_id;

      const card = await Card.findByPk(id);

      if (card){
        const tag = await Tag.findByPk(tagId);
        if (tag){
          if (!await card.hasTag(tag)){
            await card.addTag(tagId);
            const updatedCard = await Card.findByPk(id, { include: 'tags' });
            res.json(updatedCard);
          }else{
            res.status(400).json("tag_id already associated");  
          }
          
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

  async unasociateTag(req, res) {
    try{
      const id = req.params.id;
      const tagId = req.params.tag_id;

      const card = await Card.findByPk(id);

      if (card){
        const tag = await Tag.findByPk(tagId);
        if (tag){
          await card.removeTag(tagId);
          const updatedCard = await Card.findByPk(id, { include: 'tags' });
          // note : ici on pourrait également utiliser reload (avec le include tout pareil)
          res.json(updatedCard);
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