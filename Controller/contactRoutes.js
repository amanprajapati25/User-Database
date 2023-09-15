const express = require('express');
const app = express();
const userInfo = require('../config/models/UserInfo');
const asyncHandler = require('express-async-handler');

const getAllContacts = (asyncHandler(async(req, res) => {
    const userData = await userInfo.find();
    res.status(200).json(userData);
}))

const getContactId = ((req, res) => {
    res.status(200).json({ message: `This is a contact id ${req.param.id}` })
})

const contactDelete = (req, res) => {
    res.status(201).json({ message: 'thiss is deleted' })
}


const addContacts = (req, res) => {
    const { name, contact } = req.body;
    console.log("aman", name, contact);

    res.status(201).json({ message: 'This is a add contact API' })
}

const deleteContact = (req, res) => {
    res.status(201).json({ message: 'Your contact is been deleted' })
}
module.exports = { getAllContacts, getContactId, addContacts, contactDelete, deleteContact }
