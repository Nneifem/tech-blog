// import models
const User = require('./User');
const Project = require('./Project');

// User has many Projects
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Project,
};