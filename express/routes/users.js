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

function preventUndefinedField(field1, field2){
  if (field1 === undefined || field2 === undefined) {
    console.log(`${field1}/${field2} IS UNDEFINED!`)
    return false
  }
}

// async function makeNewUser(){}

async function verifyUserLogin(email, password) {
  preventUndefinedField(email, password)
  const user = await userExists(email, password)
  return user
}

module.exports = {
	getAll,
	getById,
  verifyUserLogin,
  userExists,
  preventUndefinedField,
};
