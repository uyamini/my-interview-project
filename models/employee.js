module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Employee', {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Department',
                key: 'department_id'
            }
        },
        first_name: { type: DataTypes.STRING },
        last_name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        phone_number: { type: DataTypes.STRING },
        hire_date: { type: DataTypes.DATE },
        job_title: { type: DataTypes.STRING },
        salary: { type: DataTypes.DECIMAL },
    }, {
        tableName: 'employees',
        timestamps: false
    });
};
