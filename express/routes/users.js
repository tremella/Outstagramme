const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')
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


// ------- ^ I need to require those all in better ------//

async function getAll(){
  const users = await User.findAll();
  return users;
}


async function getById(idNum) {
  const user = await User.findByPk(idNum);
  if (user) {
    return user
  } else {
    console.log('USER NOT FOUND')
  }
}

module.exports = {
	getAll,
	getById,
};
