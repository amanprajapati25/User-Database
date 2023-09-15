const express = require('express');
const Router = express.Router();
const { getAllContacts, getContactId, addContacts, deleteContact } = require('./../Controller/contactRoutes');


Router.route('/').get(getAllContacts); 
Router.route('/:id').put(getContactId);
Router.route('/:id').post(addContacts);
Router.route('/:id').delete(deleteContact);



module.exports = Router;