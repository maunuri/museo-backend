const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dflejo31kc8aub', 'rkxpmclucjlkgm', '47651937592dc3fd7bcf964590cad1bcf9cfba340f46146ed71e0d0f9d784d82', {
    host: 'ec2-54-217-195-234.eu-west-1.compute.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    protocol: 'postgres',    
    define: {
        timestamps: false
    },
});

module.exports = sequelize;