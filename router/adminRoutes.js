const express = require('express');
const router = express.Router();
const Post = require('../model/Post'); // Corrected the import path to match the file structure

// Fetch All Posts
router.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add a new post
router.post('/api/addposts', async (req, res) => {
    try {
        const { image, heading, description } = req.body;

        // Create a new post object
        const newPost = new Post({
            image,
            heading,
            description
        });

        // Save the new post to the database
        const savedPost = await newPost.save();

        res.status(201).json(savedPost); // Respond with the saved post object
    } catch (error) {
        console.error('Error adding post:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/exercises', async (req, res) => {
    try {
        const exercises = await Post.find({}, 'image description title'); // Fetching only imageUrl, description, and title fields
        res.json(exercises);
    } catch (error) {
        console.error('Error fetching exercises:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
