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

// test that it can be made
function dummyPost() {
  Post.init({
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
  }, {
    sequelize,
    modelName: 'Post'
  });

  // check if it worked
  console.log(Post === sequelize.models.Post); // true


}

//--- create a real post, add to table ----- //

// .sync creates the table if it doesn't exist
Post.sync().then(()=>{
  // this method creates and saves to the DB
  const firstPost = Post.create({
    owner: 'Jen',
    timePosted: "2020-01-01T00:01:01.000Z",
    caption: "howdy y'all"}
  ).then(()=>{
    console.log('created a post')
    console.log(firstPost)
  })

})
