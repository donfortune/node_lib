const express = require('express');
const libController = require('/Users/mac/node_libApi/controllers/libControllers.js'); // import the controller object
const libRouter = express.Router(); // import the router object from express

libRouter.get('/libs', libController.getAllLibs); // create a route for the getBooks function
libRouter.post('/libs', libController.addBook); // create a route for the addBook function
libRouter.get('/libs/:id', libController.getBookById); // create a route for the getBookById function
libRouter.get('/borrow', libController.borrowBook); // create a route for the getBooksBorrowedByUser function
// libRouter.get('/books/:id', libController.getBookById); // get a book by its id

module.exports = libRouter; // export the router object



