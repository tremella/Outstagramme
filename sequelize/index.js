// this is where I will (eventually)
// put code which will set up all the models at once... I think
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')
const User = require ('./models/user.model.js')
const Session = require ('./models/session.model.js')
const Post = require ('./models/post.model.js')

async function initializeDb(){
  Session.belongsTo(User);
  Post.belongsTo(User)
  await sequelize.sync({force : true})
  await User.sync()
  await Post.sync()
  await Session.sync()
}

initializeDb().then(()=>{
  const firstUser = User.create({
    firstName : 'Jen',
    lastName : 'Jones',
    handle : 'JenJo',
    email : 'jj@gmail.com',
    password : "jortsjorts"
  }).then(()=>{
    const firstPost = Post.create({
      UserId : '1',
      timePosted: "2020-01-01T00:01:01.000Z",
      caption: "howdy y'all"
    }).then(()=>{
      const firstSession = Session.create({
        sessionKey : '1234567sessionKey7654321',
        UserId : '1'
      })
    })
  })




})
