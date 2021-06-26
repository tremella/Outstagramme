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

// this object will contain ALL our routes
const routes = {
	posts: require('./routes/posts'),
	// instruments: require('./routes/instruments'),
};

// // check it works
// routes.posts.getAll()
// .then((posts)=>{ posts.forEach(post => console.log(post.owner))})

// app.get is given a path, and a function detailing
// what we want it to do with the request it sends + the response it gets.
app.get('/posts',(req, res)=>{
  routes.posts.getAll()
  .then((posts)=> {
    res.json({posts: posts})
  });
})
