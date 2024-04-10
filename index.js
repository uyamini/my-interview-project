const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Setting up EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Importing the db object from models/index.js
const db = require('./models');
const { Employee, Department } = db;

// Establishing model relationships
Department.hasMany(Employee, { foreignKey: 'department_id' });
Employee.belongsTo(Department, { foreignKey: 'department_id' });

// Import route modules
const employeesRoutes = require('./routes/employees');
const departmentsRoutes = require('./routes/departments');

// Use routes
app.use(employeesRoutes);
app.use(departmentsRoutes);

// Root route serving the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/view-database', async (req, res) => {
    try {
        // Fetch all employees and departments
        const employees = await db.Employee.findAll({
            include: [{ model: db.Department }]
        });
        const departments = await db.Department.findAll();

        // Pass data to the EJS template
        res.render('view-database', { employees, departments });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});

//Example route to fetch data from an API
app.get('/view-api', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/data'); // Replace with actual API URL
        const apiData = response.data;
        res.render('view-api', { apiData }); // Render a view named 'view-api.ejs'
    } catch (error) {
        console.error('Error fetching API data:', error);
        res.status(500).send('Server Error');
    }
});


// Syncing the database and starting the server
db.sequelize.sync().then(() => {
    console.log("DB Synced");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error(err));
