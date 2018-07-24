'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('anime_producer', {
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
            producer: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'producer',
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
        return queryInterface.dropTable('anime_producer');
    }
};
