const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('postgresql://localhost:5432/insta-react');

// defining what a User should look like

const User = sequelize.define('User',{
  firstName :{
    type: DataTypes.STRING,
    allowNull: false,
    len: [2,16]
  },
  lastName :{
    type: DataTypes.STRING,
    allowNull: false,
    len: [2,16]
  },
  handle :{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    len: [2,12]
  },
  email :{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password :{
    type: DataTypes.STRING,
    allowNull: false,
    len: [8,20]
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
    firstName : 'Jen',
    lastName : 'Jones',
    handle : 'JenJo',
    email : 'jj@gmail.com',
    password : "jortsjorts"
  }).then(()=>{
    console.log('made a user:', firstUser)
  })
})
