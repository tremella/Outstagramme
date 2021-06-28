const { Sequelize, DataTypes, Model } = require('sequelize');

// the arg is the connection URI
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')

//this tests the connection
async function tryConnect(){
  console.log('running tryConnect..')
  try {
    await sequelize.authenticate();
    console.log('*** connection made! ***');
  } catch (error) {
    console.error('*** connection failed! ***', error);
  }

  sequelize.close()
  console.log('*** closed connection! ***')

}

//-------- Post --------- //

// define what a Post should look like

const Post = sequelize.define('Post',{
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

// test that it can be made
function dummyPost() {
  Post.init({
    timePosted : {
      type: DataTypes.DATE,
      allowNull: false
    },
    caption : {
      type: DataTypes.STRING,
      allowNull: false
    }
    // uncertain how to handle photo.
  }, {
    sequelize,
    modelName: 'Post'
  });

  // check if it worked
  console.log(Post === sequelize.models.Post); // true

}

//--- create a real post, add to table ----- //

// .sync creates the table if it doesn't exist


module.exports = Post;
