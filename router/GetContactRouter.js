const express = require('express');
const Router = express.Router();


const { getAllContacts, getContactId, updateContact, addContacts, deleteContact } = require('./../Controller/contactRoutes');

Router.route('/').get(getAllContacts);
Router.route('/:id').patch(updateContact);
Router.route('/:id').put(updateContact);
Router.route('/').post(addContacts);
Router.route('/:id').delete(deleteContact);




module.exports = Router;