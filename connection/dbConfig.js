const { Sequelize , DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'admin',
    database: 'bookshop',
    dialect: "mysql",
})

sequelize.authenticate().catch((err)=>{
    throw err
})

sequelize.sync({ alter : true })

module.exports = { sequelize , DataTypes }