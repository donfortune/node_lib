const Library = require('/Users/mac/node_libApi/models/libModels.js');

exports.getAllLibs = async (req, res) => {
    try {
        const libs = await Library.find();
        console.log('All Libs fetched successfully');
        res.status(200).json(libs);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

exports.addBook = async (req, res) => {
    try {
        console.log(req.body);
        const newBook = await Library.create(req.body);
        console.log('Book added successfully');
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

exports.getBookById = async (req, res) => {
    try {
        console.log(req.params.id);
        const book = await Library.findById(req.params.id);
        console.log('Book fetched successfully');
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json(error.message);
        
    }
}