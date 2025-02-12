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



exports.borrowBook = async (req, res) => {
    try {
        const { userId, bookId } = req.body;

        // Find the book
        const book = await Library.findById(bookId);
        if (!book) {
            return res.status(404).json({ status: 'fail', message: 'Book not found' });
        }

        // Check if book is available
        if (book.quantity - book.borrowed <= 0) {
            return res.status(400).json({ status: 'fail', message: 'No copies available' });
        }

        // Check if user already borrowed this book
        if (book.borrowers.includes(userId)) {
            return res.status(400).json({ status: 'fail', message: 'User has already borrowed this book' });
        }

        // Update book data
        book.borrowed += 1;
        book.borrowers.push(userId);
        await book.save();

        res.status(200).json({
            status: 'success',
            message: 'Book borrowed successfully',
            data: book
        });

    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};
