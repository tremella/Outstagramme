// this file sets up the server and responds to requests

const express = require('express');

// creates an Express application.
const app = express();

// creates a HTTP server object on our computer -
const http = require('http').createServer(app)
const cors = require('cors') // disables cors

app.use(cors());
app.use(express.json()) // "everything on the server is returned as a JSON"
const PORT = 8000

// we make the http server listen on port 8000
http.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
})

// this will contain our routes from the express/routes folder.
const routes = {
	posts: require('./routes/posts'),
  users: require('./routes/users')
	// instruments: require('./routes/instruments'),
};

// // check it works
// routes.posts.getAll()
// .then((posts)=>{ posts.forEach(post => console.log(post.owner))})

// app.get is given a path, and a function detailing
// what we want it to do with the request it sends + the response it gets.

// open http://localhost:8000/posts to see them
app.get('/posts',(req, res)=>{
  routes.posts.getAll()
  .then((posts)=> {
    res.json({posts: posts})
  });
})

app.get('/posts/1',(req, res)=>{
  routes.posts.getById(1)
  .then((posts)=> {
    res.json({posts: posts})
  });
})

// open http://localhost:8000/users to see them
app.get('/users',(req, res)=>{
  routes.users.getAll()
  .then((users)=> {
    res.json({users: users})
  });
})

// open http://localhost:8000/users/5 to see it
app.get('/users/5',(req, res)=>{
  routes.users.getById(5)
  .then((users)=> {
    res.json({users: users})
  });
})
