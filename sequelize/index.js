// this is where I will (eventually)
// put code which will set up all the models at once... I think
const { Sequelize, DataTypes, Model } = require('sequelize')
const { connection_string } = require('../config');
const sequelize = new Sequelize(connection_string)
const User = require ('./models/user.model.js')
const Post = require ('./models/post.model.js')

async function initializeDb(){
  Post.belongsTo(User)
  await sequelize.sync({force : true})
  await User.sync()
  await Post.sync()
}

initializeDb().then(()=>{
  const firstUser = User.create({
    fullName : 'Jen Jones',
    userName : 'JenJo',
    email : 'jj@gmail.com',
    password : "jortsjorts"
  }).then(()=>{
    const firstPost = Post.create({
      UserId : '1',
      timePosted: "2020-01-01T00:01:01.000Z",
      caption: "howdy y'all"
    })
  })
})
