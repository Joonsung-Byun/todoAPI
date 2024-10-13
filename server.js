const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const todos = [
    { id: 1, title: 'Presentation', completed: false},
    { id: 2, title: 'Washing Dishes', completed: false },
    { id: 3, title: 'Homework', completed: false },
    { id: 4, title: 'Meeting', completed: false },
]

const categories = [
    {c_id: 1 ,t_id: 1, name: 'work' },
    {c_id: 2 ,t_id: 2, name: 'home' },
    {c_id: 3 ,t_id: 3, name: 'school' },
    {c_id: 4 ,t_id: 4, name: 'work' },
    
]
//I will use Body, x-www-form-urlencoded to send data to the server

//when user sends a get request, the server will send the list of todos
app.get('/', (req, res) => {
    console.log('get')
    res.send(JSON.stringify(todos));
    });

//when user sends a new todo, the server will add it to the list
app.post('/', (req, res) => {
    console.log('post')
    console.log(req.body)
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    }
    todos.push(newTodo)
    res.send(JSON.stringify(todos));
})

//when user sends an id, the server will update its completed status
app.put('/', (req, res) => {
    console.log('put')
    console.log(req.body)
    const id = req.body.id
    const todo = todos.find(todo => todo.id == id)
    todo.completed = !todo.completed
    res.send(JSON.stringify(todos));
})

//when user sends an id, the server will delete the todo
app.delete('/', (req, res) => {
    console.log('delete')
    console.log(req.body)
    const id = req.body.id
    const index = todos.findIndex(todo => todo.id == id)
    todos.splice(index, 1)
    res.send(JSON.stringify(todos));
})

//when user sends a get request with t_id, the server will send the list of todos
app.get('/getAllCategory', (req, res) => {
    const category = req.body.category // work
    const foundCategory = categories.filter(cat => cat.name == category) 
    const t_ids = foundCategory.map(cat => cat.t_id)
    const filteredTodos = todos.filter(todo => t_ids.includes(todo.id))
    res.send(JSON.stringify(filteredTodos));
})

//when user sends a get request to /category with id, the server will send the list of categories of that id
app.get('/category', (req, res) => {
    const id = req.body.id
    const findCategory = categories.filter(cat => cat.t_id == id)
    const foundCategory = findCategory[0].name
    const result = categories.filter(cat => cat.name == foundCategory)
    res.send(JSON.stringify(result));
});

//when user sends an id and a new category, the server will add the new category to the coressponding id
app.post('/category', (req, res) => {
    const id = req.body.id
    const category = req.body.category
    const item = categories.find(cat => cat.t_id == id)
    item.name = item.name + ', ' + category
    res.send(JSON.stringify(categories));
})


//when user sends an idand a new category, the server will find the item and update its category to the new category. Finally, the server will send the list of categories
app.put('/category', (req, res) => { 
    const id = req.body.id
    const category = req.body.category
    const findCategory = categories.filter(cat => cat.t_id == id)
    findCategory[0].name = category
    res.send(JSON.stringify(categories));
})

//when user send an id, the server will delete the category of that id
app.delete('/category', (req, res) => {
    const id = req.body.id
    const findCategory = categories.filter(cat => cat.t_id == id)
    const index = categories.findIndex(cat => cat.t_id == id)
    categories.splice(index, 1)
       res.send(JSON.stringify(categories));
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });