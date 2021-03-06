const { connection_string } = require('../../config');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(connection_string);

// defining what a User should look like

const User = sequelize.define('User',{
  fullName :{
    type: DataTypes.STRING,
    allowNull: false,
    len: [3,32]
  },
  userName :{
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
