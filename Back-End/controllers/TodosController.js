const Todo = require('../models/Todo');
const User = require('../models/User');


class TodosController{
    //View All todos for user
    async index(req, res){
        try{
            //Find all the todos in the user.todos array of _ids
            const todos =  await  Todo.find( {_id: { $in: req.user.todos} }, {}, { sort: { create_at: 1 } } );
            res.status(200).send(todos)
        }
        catch(e){
            res.status(500).send({
                error: true,
                message: "Error Fetching Todos, " + e.message
            })
        }
    }

    //Create new todo for user
    create(req, res){
        const {description} = req.body;
        const todo = (new Todo({description}));
        todo.save().then(
            todo => User.updateOne({_id: req.user._id}, {$push: {todos: todo._id}})
        ).then(
            () => res.status(200).send({todo})
        ).catch(err => {
            res.status(500).send({
                error: true,
                message: 'Error while creating Todo, ' + err.message
            })
        });
    }

    //Delete single todo
    destroy(req, res){
        const _id = req.params.id;
        Todo.findByIdAndDelete(_id).then(
            () => User.updateOne({_id: req.user._id}, {$pull: {todos: _id}})
        ).then(
            () => res.status(200).send({})
        ).catch(err => {
            res.status(500).send({
                error: true,
                message: 'Error while creating Todo, ' + err.message
            })
        });
    }

    //edit single description todo
    updateDescription(req, res){
        const _id = req.params.id,
            {description} = req.body;
        Todo.findByIdAndUpdate(_id, { $set: {description} }, {new: true}).then(
            newTodo => res.status(200).send({todo: newTodo})
        ).catch(err => {
            res.status(500).send({
                error: true,
                message: 'Error while updating Todo, ' + err.message
            })
        });
    }

    //edit single done state todo
    updateDone(req, res){
        const _id = req.params.id;
        Todo.findById(_id).then(
            todo => Todo.findByIdAndUpdate(_id, { $set: {done: !todo.done} })
        ).then(
            newTodo => res.status(200).send({todo: newTodo})
        ).catch(err => {
            res.status(500).send({
                error: true,
                message: 'Error while updating Todo, ' + err.message
            })
        });
    }
}

module.exports = TodosController;