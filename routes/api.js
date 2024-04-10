const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch and display data from an external API
router.get('/view-api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const apiData = response.data;
        // Assuming you have a view file named 'view-api.ejs' in the views directory
        res.render('view-api', { apiData });
    } catch (error) {
        console.error('Error fetching API data:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
