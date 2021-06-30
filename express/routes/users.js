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
    console.log('email/password undefined')
    return false;
  }
  // *** ///
  const user = await User.findOne({ where: { email: email } })
  // the AWAIT makes user resolve before continuing.
  if (user === null) {
    console.log('nonexistent user')
    return false;
  }
  if (user.dataValues.password === password) {
    console.log('correct email/password combo')
    return true;
  } else {
    console.log('wrong password/email combo')
    return false
  }
}

module.exports = {
	getAll,
	getById,
  verifyUserLogin,
};
