const { sequelize , DataTypes } = require('../connection/dbConfig')

const User = sequelize.define('User',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull: false
    },
    email : {
        type : DataTypes.STRING,
        allowNull: false
    },
    status : {
        type : DataTypes.ENUM('active','inactive'),
        allowNull:false,
        defaultValue: 'active'
    }
})

module.exports =  { User }