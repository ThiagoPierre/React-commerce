const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

class UserController{
    index(req, res) {
        res.send({message: 'Tesde de Usuário'})
    }
}

module.exports = new UserController;