'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anime', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mal_id: {
        type: Sequelize.INTEGER
      },
      link_canonical: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      episodes: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      aired_from: {
        type: Sequelize.DATE
      },
      aired_to: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      background: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('anime');
  }
};
