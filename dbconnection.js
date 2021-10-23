const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    protocol: 'postgres',    
    define: {
        timestamps: false
    },
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;