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

module.exports = User;
