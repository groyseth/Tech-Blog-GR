const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const format_date = require('../utils/helpers')

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.STRING,
      
      allowNull: false,
      
      // default: Date.now,
      // defaultValue: Date.now,
      // get:(date)=>format_date(date),
      
      // get: (timestamp) => format_date(timestamp),
    },
  },
  {
    hooks : {
      beforeCreate : (record, options) => {
          record.dataValues.createdAt = Math.floor(Date.now() / 1000);
          record.dataValues.updatedAt = Math.floor(Date.now() / 1000);
      },
      beforeUpdate : (record, options) => {
          record.dataValues.updatedAt = Math.floor(Date.now() / 1000);
      }
  },
    sequelize
  }
);

module.exports = Comment;
