const express = require('express');
const app = express();
const userInfoSchema = require('../config/models/UserInfo');
const asyncHandler = require('express-async-handler');

const getAllContacts = (asyncHandler(async (req, res) => {
    const userData = await userInfo.findbyId();
    res.status(200).json(userData);
}))

const getContactId = ((req, res) => {
    res.status(200).json({ message: `This is a contact id ${req.param.id}` })
})

const contactDelete = (req, res) => {
    res.status(201).json({ message: 'thiss is deleted' })
}



const addContacts = (asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    console.log("aman", req.body, name, email, phone);
    const contact = await userInfoSchema.create({
        name,
        email,
        phone
    })
    console.log("herer", contact);
    res.status(201).json(contact);
}));


const deleteContact = (req, res) => {
    res.status(201).json({ message: 'Your contact is been deleted' })
}
module.exports = { getAllContacts, getContactId, addContacts, contactDelete, deleteContact }
