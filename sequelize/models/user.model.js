const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('postgresql://localhost:5432/insta-react');

// defining what a User should look like

const User = sequelize.define('User',{
  firstName :{
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName :{
    type: DataTypes.STRING,
    allowNull: false
  },
  handle :{
    type: DataTypes.STRING,
    allowNull: false
  },
  email :{
    type: DataTypes.STRING,
    allowNull: false
  },
  password :{
    type: DataTypes.STRING,
    allowNull: false
  }
});

//can it be made? YES
function dummyUser() {
  User.init({
    id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName :{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName :{
      type: DataTypes.STRING,
      allowNull: false
    },
    handle :{
      type: DataTypes.STRING,
      allowNull: false
    },
    email :{
      type: DataTypes.STRING,
      allowNull: false
    },
    password :{
      type: DataTypes.STRING,
      allowNull: false
    }
    // uncertain how to handle photo.
  }, {
    sequelize,
    modelName: 'User'
  });

  // check if it worked
  console.log(User === sequelize.models.User); // true


}
// dummyUser()

User.sync().then(()=>{
  const firstUser = User.create({
    firstName : 'Bill',
    lastName : 'Boggis',
    handle : 'Boggo',
    email : 'bb@gmail.com',
    password : "blogblog"
  }).then(()=>{
    console.log('made a user:', firstUser)
  })
})
