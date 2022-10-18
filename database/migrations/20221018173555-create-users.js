'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: { allowNull: false, type: Sequelize.STRING },
            secondName: { allowNull: false, type: Sequelize.STRING },
            cpf: { allowNull: false, type: Sequelize.STRING },
            bornDate: { allowNull: false, type: Sequelize.STRING },
            email: { allowNull: false, unique: true, type: Sequelize.STRING },
            password: { allowNull: false, type: Sequelize.STRING },
            phone: { allowNull: false, type: Sequelize.STRING },
            adress: { allowNull: false, type: Sequelize.STRING },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },

    async down(queryInterface) {
        return await queryInterface.dropTable('users');
    },
};
