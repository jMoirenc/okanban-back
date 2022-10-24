const { List, Card, Tag } = require ('../models/index');

const listController = {
  getAllLists: async (req, res) => {
    try{
      const lists = await List.findAll({
        include: {
          model: Card,
          as: 'cards',
          include: {
            model: Tag,
            as: 'tags',
          }
        },
        order: [
          ['position', 'ASC'],
          ['cards', 'position', 'ASC'],
        ]
      });

      res.json(lists);
    }catch(error){
      console.trace(error);
      res.status(500).json("unexpected error");
    }    
  },

  getOneList: async (req, res) => {
    try{
      const id = req.params.id;      
      const list = await List.findByPk(id);
      if (list){
        res.json(list);
      }else{
        res.status(404).json("list not found");  
      }
    }catch(error){
      console.trace(error);
      res.status(500).json("unexpected error");
    }    
  },
};

module.exports = listController;