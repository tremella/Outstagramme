const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')
const Post = sequelize.define('Post',{
  owner : {
    type: DataTypes.STRING,
    allowNull: false
  },
  timePosted : {
    type: DataTypes.DATE,
    allowNull: false
  },
  caption : {
    type: DataTypes.STRING,
    allowNull: false
  }
  // uncertain how to handle photo.
});

// ------- ^ I need to require those all in better ------//

async function showMePosts(){
  const posts = await Post.findAll();
  posts.forEach(post => console.log(post.dataValues))
}

showMePosts()
