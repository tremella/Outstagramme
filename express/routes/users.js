const collect = require('collect.js');
// import collect from 'collect.js';

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

async function userExists(email,password){
  console.log('in userExists')
  const user = await User.findOne({ where: { email: email } })
  // the AWAIT makes user resolve before continuing.
  if (user === null) {
    return false;
  }
  if (user.dataValues.password === password) {
    return true;
  } else {
    return false
  }
}

function preventUndefinedField(arr){
  const fields = collect(arr)
  if (fields.contains(undefined)) {
    console.log(`UNDEFINED INPUT/S`)
    return false
  }
}

async function makeNewUser(email, fullname, username, password){

}

async function verifyUserLogin(email, password) {
  preventUndefinedField([email, password])
  const doesUserExist = await userExists(email, password)
  return doesUserExist
}

module.exports = {
	getAll,
	getById,
  verifyUserLogin,
  userExists,
  preventUndefinedField,
};
