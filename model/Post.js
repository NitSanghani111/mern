// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);
