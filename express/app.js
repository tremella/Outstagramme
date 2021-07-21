// this file sets up the server and responds to requests
const express = require('express');
const session = require('express-session');
const pg = require('pg')
const { database_password, express_port } = require('../config');
const dotenv = require('dotenv');
dotenv.config();


// creates an Express application.
const app = express();

// creates a HTTP server object on our computer -
const http = require('http').createServer(app);
const cors = require('cors'); // disables cors

// creates connection pool: a 'cache' which is a more sustainable way to maintain a connection to the database
const pgSession = require('connect-pg-simple')(session);
const pgPool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'insta-react',
  password: database_password,
  port: 5432,
});

app.use(cors());
app.use(express.json()); // "everything on the server is returned as a JSON"


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  store: new pgSession({
    pool: pgPool
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}))


// we make the http server listen on port 8000
http.listen(express_port, ()=> {
  console.log(`listening on port ${express_port}`)
})

// this will contain our routes from the express/routes folder.
const routes = {
	posts: require('./routes/posts'),
  users: require('./routes/users')
	// instruments: require('./routes/instruments'),
};


// ENDPOINTS
// open http://localhost:8000/posts to see the first one.
app.get('/posts',(req, res)=>{
  console.log(req.session)
  if (req.session.loggedIn) {
    routes.posts.getAll()
    .then((posts)=> {
      res.json({posts: posts})
    });
  } else {
    res.sendStatus(401)
  }
  // routes.posts.getAll()
  // .then((posts)=> {
  //   res.json({posts: posts})
  // });
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
        session: req.session})
    } else {
      res.sendStatus(401)
    }
  })

})
app.post('/logout',(req,res)=>{
  if (req.session){
    req.session.destroy((err)=>{})
    res.json({message : 'successful logout'})
  }
})

app.post('/signup',(req,res)=>{
  routes.users.makeNewUser(req.body.email,req.body.fullname,req.body.username, req.body.password)
  console.log('inside the signup endpoint')
  // make a function similar to verifyUserLogin, in routes/users
  // it should check this user doesn't exist
  // it should validate the input choices
  // it should create the user
  // SUCCESS IF: user created
  // [later] ALSO IF: an invalid user is not created
  // ALSO make another function: a redirect to the login page
})
