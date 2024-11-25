const express = require('express');
let Todo = require('./model')
let cors = require('cors')
let app = express()
let bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('hello world')
})
//comment
app.get('/getTodos', async (req, res) => {
    try {
        let Todos = await Todo.find()
        res.status(200).json({
            status: "success",
            data: Todos
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
            status: "failure"

        })
    }
})
app.post('/createTodos', async (req, res) => {
    try {
        let Todos = await Todo.create({
            title: req.body.title,
            created: req.body.created,
            completed: req.body.completed,
            important: req.body.important,
            add_to_day: req.body.add_to_day,
            due_date: req.body.due_date,
            planned: req.body.planned,
            content: req.body.content
        })
        res.status(200).json({
            status: "success",
            message: "Todo created successfully",
            data: Todos,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
            status: "failure"

        })
    }
})
app.post('/updateTodo/:_id', async (req, res) => {
    try {
        let Todos = await Todo.updateOne(
            { _id: req.params._id }, // Filter for the document to update
            { 
                $set: {
                    title: req.body.title,
                    created: req.body.created,
                    completed: req.body.completed,
                    important: req.body.important,
                    add_to_day: req.body.add_to_day,
                    due_date: req.body.due_date,
                    planned: req.body.planned,
                    content: req.body.content
                }
            }
        )
        res.status(200).json({
            status: "success",
            message: "Todo updated successfully",
            data: Todos,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
            status: "failure"

        })
    }
})
app.post('/deleteTodo/:_id', async (req, res) => {
    console.log("called")
    try {
        let Todos = await Todo.deleteOne({
            _id: req.params._id
        })
        res.status(200).json({
            status: "success",
            message: "Todo Deleted successfully",
            data: Todos,
        })
        console.log(Todos)
    } catch (err) {
        res.status(400).json({
            message: err.message,
            status: "failure"
        })
    }
})


module.exports = app
