const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// making a model for the user
class Project extends Model {}

// creating fields and columns for the model
Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        needed_funding: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        // linking to database
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;