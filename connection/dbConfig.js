const { Sequelize , DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'bookstore',
    dialect: "mysql",
})

sequelize.authenticate().catch((err)=>{
    throw err
})

sequelize.sync({ alter : true })

module.exports = { sequelize , DataTypes }