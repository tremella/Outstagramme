
const Post = require ('../../sequelize/models/post.model.js')


// ------- ^ I need to require those all in better ------//

async function getAll(){
  const posts = await Post.findAll();
  return posts;
}

async function getById(id) {
  const post = await Post.findByPk(id);
  if (post) {
    return post
  } else {
    console.log('POST NOT FOUND')
  }
}

module.exports = {
	getAll,
	getById,
};
