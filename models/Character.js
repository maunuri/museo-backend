const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbconnection');

const Character = sequelize.define('character', { //create database model for user-created characters
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    head: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    torso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    legs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    theme: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},  {
    freezeTableName: true
});

module.exports = Character; //export character model for further use