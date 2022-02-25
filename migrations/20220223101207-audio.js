'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audio', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAppointment: {
        type: Sequelize.TEXT,
        allowNull: false,
              },
              idAwsAudioFile: {
                type: Sequelize.TEXT,
                allowNull: false,
                      },
      audio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
      
    });
     
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('audio')
  }
};
