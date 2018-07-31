'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('competitive_programming_problem', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            source_url: {
                type: Sequelize.STRING
            },
            detail: {
                type: Sequelize.TEXT
            },
            input_detail: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            output_detail: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            input_sample: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            output_sample: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            note: {
                type: Sequelize.TEXT
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('competitive_programming_problem');
    }
};
