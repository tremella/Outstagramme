const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('postgresql://localhost:5432/insta-react')

const Session = sequelize.define('Session',{
  sessionKey :{
    type: DataTypes.STRING,
    allowNull: false
  },
  email :{
    type: DataTypes.STRING,
    allowNull: false
  }
});

//can it be made? YES
function dummySession() {
  Session.init({
    sessionKey :{
      type: DataTypes.STRING,
      allowNull: false
    },
    email :{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Session'
  });

  // check if it worked
  console.log(Session === sequelize.models.Session); // true


}
// dummySession()

Session.sync().then(()=>{
  const firstSession = Session.create({
    sessionKey : '1234567',
    email : 'c@c.com'
  }).then(()=>{
    console.log('made a Session:', firstSession)
  })
})
