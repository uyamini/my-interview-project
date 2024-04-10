const express = require('express');
const router = express.Router();
const db = require('../models'); // Adjust the path as necessary

// Route for listing all employees with their department
router.get('/employees', async (req, res) => {
    try {
        const employees = await db.Employee.findAll({
            include: [db.Department]
        });
        res.render('employees', { employees }); // Using EJS to render the page
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).send('Server Error');
    }
});

// Route for fetching a single employee by ID
router.get('/employees/:id', async (req, res) => {
    try {
        const employee = await db.Employee.findByPk(req.params.id, {
            include: [db.Department]
        });
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.json(employee);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
