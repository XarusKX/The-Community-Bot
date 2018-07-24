'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('anime_studio', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            anime: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'anime',
                    key: 'id'
                }
            },
            studio: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'studio',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('anime_studio');
    }
};
