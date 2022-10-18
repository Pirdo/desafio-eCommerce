const { v4: uuid_v4 } = require('uuid');
const Users = require('../../models/userModel/userModel');

const insertUser = async (req, res) => {
    try {
        const user = {
            // id: uuid_v4(),
            name: req.body.name,
            // secondName: req.body.secondName,
            // cpf: req.body.cpf,
            // bornDate: req.body.bornDate,
            // email: req.body.email,
            // password: req.body.password,
            // phone: req.body.phone,
            // adress: req.body.adress,
        };
        console.log(user);
        const results = await Users.create(user);
        res.status(201).json(results.id);
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

module.exports = { insertUser };
