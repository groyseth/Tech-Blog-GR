const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
//used addon
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
//added on
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
//used add on
module.exports = {
  User,
  Comment,
  Post
};