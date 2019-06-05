const Todo = require('../models/Todo');
class TodosController{
    //View All todos for user
    index(req, res){
        res.status(200).send({
            todos: 'todos'
        })
    }

    //Create new todo for user
    create(req, res){

    }


    //Delete single todo
    destroy(req, res){

    }

    //edit single todo
    update(req, res){

    }
}

module.exports = TodosController;