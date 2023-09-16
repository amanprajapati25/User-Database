const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const UserDb = require('../config/models/RegistrationSchema');
const asyncHandler = require('express-async-handler');

const registration = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All the fields are neccesary');
    }
    const AvailableUser = await UserDb.findOne({ email });
    if (AvailableUser) {
        res.status(400);
        throw new Error('Email Already Exist');
    }

    const HashPassword = await bcrypt.hash(password, 10);

    const user = await UserDb.create({
        username,
        email,
        password: HashPassword
    })
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });

    }
    else {
        res.status(400);
        throw new Error('User is not sucessfully created');
    }
    res.status(200).json("Register the User");
})




const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields are mandtary");
    }
    const user = await UserDb.findOne({ email });

    //Compare password with bcrypt hased password
    if (user ||  (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },

        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
        )
        res.status(200).json({ accessToken })
    }
    else{
        res.status(400);
        throw new Error('Email or password is not right');
    }
})

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'My Current status' })
})

module.exports = { registration, login, currentUser };