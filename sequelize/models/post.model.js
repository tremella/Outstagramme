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

const Post = sequelize.define('Post',{
  // we define model attributes here
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

Post.init({
  // we define model attributes here
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
