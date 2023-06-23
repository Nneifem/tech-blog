const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.afterBulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Project.afterBulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
}

seedDatabase();