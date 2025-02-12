const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    quantity: {
        type: Number,
        required: true
    },
    // quantity after a book has been borrowed
    borrowed: {
        type: Number,
        default: 0,
        required: true
    },
    // quantity after a book has been returned
    returned: {
        type: Number,
        default: 0,
        required: true
    },
    borrowers:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;
