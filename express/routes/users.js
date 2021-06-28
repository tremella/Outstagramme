const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')
const User = require ('../../sequelize/models/user.model.js')

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

async function verifyUserLogin(email, password) {

  if (email === undefined || password === undefined) {
    return false;
  }
  console.log(email, password, 'HERE')
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    if (user.password === password) {return true} else { return false}
  } else {
    console.log('BUZZ OFF')
    return false;
  }
}

module.exports = {
	getAll,
	getById,
  verifyUserLogin,
};
