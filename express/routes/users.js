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
    console.log('EMAIL AND PASSWORD PARAMS ARE UNDEFINED')
    return false;
  }
  const user = await User.findOne({ where: { email: email } })
  .then(response => {
    console.log('findOne implemented')
    if (response === null) {
      console.log('nonexistent user')
      return false;
    }
    console.log(response.dataValues.password)
    if (response.dataValues.password === password) {
      console.log('correct email/password combo')
      return true;
    } else {
      console.log('WRONG password/email combo')
      return false
    }
  })
  // console.log(user)
  // if (user) {
  //   console.log('USER EXISTS: CHECKING PW')
  //   if (user.password === password) {return true} else { return false}
  // } else {
  //   console.log('THIS USER DOES NOT EXIST')
  //   return false;
  // }
}

module.exports = {
	getAll,
	getById,
  verifyUserLogin,
};
