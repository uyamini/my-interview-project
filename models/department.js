module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Department', {
        department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.STRING },
        location: { type: DataTypes.STRING }
    }, {
        tableName: 'departments',
        timestamps: false
    });
};