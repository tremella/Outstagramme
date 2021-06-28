const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')

const Session = sequelize.define('Session',{
  sessionKey :{
    type: DataTypes.STRING,
    allowNull: false
  }
});


// dummySession()

module.exports = Session;
