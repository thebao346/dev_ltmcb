'use strict';
const mongoose = require("../models/index");
const user = require('../models/users')

const userController = {};

userController.getUser = async (req, res, next) => {
    const usersList = await user.find({ username: 'admin' });
    console.log(usersList);
    res.send(JSON.stringify(usersList));
}

userController.loginUser = async (req, res, next) => {
    const userData = req.body;
    const newUser = new user({
        username: userData.username,
        password: userData.password,
    });
    try {
        newUser.save();
        res.send("OK");
    } catch (err) {
        if (err)
            console.log(err);
    }
}

module.exports = userController;