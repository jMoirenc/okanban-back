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
        ],
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
      const list = await List.findByPk(id,
        {
          include: {
            association: 'cards',
            include: 'tags'
          },
          order: [          
            ['cards', 'position', 'ASC'],
          ],
        }
      );
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

  async addList(req, res){
    try{
      const name = req.body.name;
      const position = req.body.position;

      const errors = [];

      if (!name){
        errors.push('name is mandatory');
      }

      if (!position){
        errors.push('position is mandatory');
      }

      if (parseInt(position, 10) != position){
        errors.push('position must be a valid number');
      }

      if (errors.length >= 1){
        res.status(400).json({ errors });
      }else{
        const newList = await List.create({ name , position });
        res.status(201).json(newList);
      }

    }catch(error){
      console.trace(error);
      res.status(500).json("unexpected error");
    }   
  },

  async updateList(req, res){
    try{
      const id = req.params.id;      
      const name = req.body.name;
      const position = req.body.position;

      const errors = [];

      const list = await List.findByPk(id);

      if (list){
        if (name){
          list.name = name;
        }

        if (position){
          if (parseInt(position, 10) != position){
            errors.push('position must be a valid number');
          }else{
            list.position = position;
          }          
        }

        if (errors.length >= 1){
          res.status(400).json({ errors });
        }else{
          list.save();
          console.log(list);
          res.status(200).json(list);
        }

      }else{
        res.status(404).json("list not found");
      }

    }catch(error){
      console.trace(error);
      res.status(500).json("unexpected error");
    }    
  },

  async deleteList(req, res) {
    try{
      const id = req.params.id;      
      const list = await List.findByPk(id);
      if (list){
        list.destroy();
        res.status(204).json();
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