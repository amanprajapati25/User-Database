const express = require('express');
const app = express();
const userInfoSchema = require('../config/models/UserInfo');
const asyncHandler = require('express-async-handler');

const getAllContacts = asyncHandler(async (req, res) => {
    const allContacts = await userInfoSchema.find();
    res.status(200).json(allContacts);
});


const getContactId = (asyncHandler(async (req, res) => {
    const userData = await userInfoSchema.findById(req.params.id);
    console.log('userData', req.params.id)
    if (!userData) {
        res.status(404);
        throw new Error('No contact found');
    }
    res.status(200).json(userData);
}))

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

const updateContact = asyncHandler(async (req, res) => {
    // Check if the contact exists before attempting to update
    const userData = await userInfoSchema.findById(req.params.id);
    if (!userData) {
        res.status(404);
        throw new Error('No contact found');
    }

    const updateContactData = await userInfoSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updateContactData);
});

const deleteContact = asyncHandler(async (req, res) => {
    const userData = await userInfoSchema.findById(req.params.id);
    if (!userData) {
        res.status(404);
        throw new Error('No contact found');
    }

    const deletedUserData = userData.toObject(); // Convert to a plain object
    console.log("delete", userData, deletedUserData)
    await userData.remove();
    res.status(200).json(deletedUserData);
});


module.exports = { getAllContacts, getContactId, addContacts, contactDelete, updateContact, deleteContact }
