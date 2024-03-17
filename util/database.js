const Sequelize = require('sequelize');


const sequelize = new Sequelize('node-complete','root','safoora777',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;