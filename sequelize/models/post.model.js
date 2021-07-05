const { connection_string } = require('../../config');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(connection_string);

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

// tryConnect()

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

// // test that it can be made
// function dummyPost() {
//   Post.init({
//     timePosted : {
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     caption : {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//     // uncertain how to handle photo.
//   }, {
//     sequelize,
//     modelName: 'Post'
//   });

//   // check if it worked
//   console.log(Post === sequelize.models.Post); // true

// }

//--- create a real post, add to table ----- //

// .sync creates the table if it doesn't exist

module.exports = Post;
