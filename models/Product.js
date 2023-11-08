// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // defining id column
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //defining product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // defining price column
    price: {
      type: DataTypes.INTEGER,
      isDecimal: true     
    },
    // defining stock column
    stock: {
      
    }    


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
