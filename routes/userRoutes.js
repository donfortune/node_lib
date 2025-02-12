const express = require('express');
const router = express.Router();
const userController = require('/Users/mac/node_libApi/controllers/userController.js');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.addUser);

module.exports = router;