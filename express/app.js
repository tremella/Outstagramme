// this file sets up the server and responds to requests
const express = require('express');
const session = require('express-session');
const crypto = require('crypto')
const pg = require('pg')

// creates an Express application.
const app = express();

// creates a HTTP server object on our computer -
const http = require('http').createServer(app);
const cors = require('cors'); // disables cors
const pgSession = require('connect-pg-simple')(session);
const pgPool = new pg.Pool({
  user: 'jessicabrand',
  host: 'localhost',
  database: 'insta-react',
  port: 5432,
});

app.use(cors());
app.use(express.json()); // "everything on the server is returned as a JSON"
const PORT = 8000

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  store: new pgSession({
    pool: pgPool
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days

}))


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

function getSessionKey(){
  var buffer = crypto.randomBytes(24);
  return buffer.toString('hex');
}

// ENDPOINTS
// open http://localhost:8000/posts to see the first one.
app.get('/posts',(req, res)=>{
  routes.posts.getAll()
  .then((posts)=> {
    res.json({posts: posts})
  });
})
app.get('/posts/:id',(req, res)=>{
  routes.posts.getById(req.params.id)
  .then((posts)=> {
    res.json({posts: posts})
  });
})
app.get('/users',(req, res)=>{
  routes.users.getAll()
  .then((users)=> {
    res.json({users: users})
  });
})
app.get('/users/:id',(req, res)=>{
  routes.users.getById(req.params.id)
  .then((users)=> {
    res.json({users: users})
  });
})
app.post('/login',(req,res)=>{

  routes.users.verifyUserLogin(req.body.email,req.body.password)
  .then((loginValid) => {
    if (loginValid === true ) {
      req.session.loggedIn = true //?
      res.json({
        sessionKey: getSessionKey(), 
        session: req.session})
    } else {
      res.json({message: 'incorrect login values'})
    }
  })

})
