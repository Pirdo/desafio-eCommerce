const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    type: DataTypes.UUIDV4,
                },
                name: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },
                secondName: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },
                cpf: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },
                bornDate: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },
                email: {
                    allowNull: false,
                    unique: true,
                    type: DataTypes.STRING,
                },
                password: { allowNull: false, type: DataTypes.STRING },
                phone: { allowNull: false, type: DataTypes.STRING },
                adress: { allowNull: false, type: DataTypes.STRING },
            },
            {
                sequelize,
                tableName: 'users',
                createdAt: 'createdAt',
                updatedAt: 'updatedAt',
            }
        );
    }
}
module.exports = Users;
