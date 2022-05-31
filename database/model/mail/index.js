const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('mails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true,
        },
    })
}
