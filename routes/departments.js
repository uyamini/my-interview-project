const express = require('express');
const router = express.Router();
const db = require('../models'); // Adjust the path as necessary

// Route for listing all departments with their employees
router.get('/departments', async (req, res) => {
    try {
        const departments = await db.Department.findAll({
            include: [db.Employee]
        });
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
