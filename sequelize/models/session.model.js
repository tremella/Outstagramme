const { connection_string } = require('../../config');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(connection_string);

const Session = sequelize.define('Session',{
  sessionKey :{
    type: DataTypes.STRING,
    allowNull: false
  }
});


// dummySession()

module.exports = Session;
