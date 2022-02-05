const {  Model, DataTypes } = require('sequelize');
//commented sequelized
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  
  // {
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'User',
  //       key: 'id',
  //     },
  //   },
  // },
  // {
  //   postId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'User',
  //       key: 'id',
  //     },
  //   },
  // },
  {
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'post'
}
);

module.exports = Post;
