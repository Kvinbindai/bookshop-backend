const { sequelize , DataTypes } = require('../connection/dbConfig')
const User = require('./UserModel')

const Product = sequelize.define('Product',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false
    },
    description : {
        type : DataTypes.STRING,
    },
    price :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    discount : {
        type : DataTypes.INTEGER,
        defaultValue: 0
    },
    status : {
        type : DataTypes.ENUM('active','inactive'),
        allowNull : false,
        defaultValue : 'active'
    },
    category : {
        type : DataTypes.STRING,
    },
    OwnerId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : User,
            key: 'id'
        }
    }
})

User.hasMany(Product,{foreignKey : 'OwnerId'});
Product.belongsTo(User,{foreignKey : 'OwnerId'})

module.exports = Product