const express = require('express');
const employee = express.Router();
const db = require('../config/database');
const jwt = require('jsonwebtoken');

// Add an employee.
employee.post('/add', async (req, res, next) => {
    const { employee_name, employee_lastname, employee_phone, employee_mail, employee_dir} = req.body;
    if (employee_name && employee_lastname && employee_phone && employee_mail && employee_dir){
        let query = `INSERT INTO employee (employee_name, employee_lastname, employee_phone, employee_mail, employee_dir)`;
        query += ` VALUES ('${employee_name}', '${employee_lastname}', '${employee_phone}', '${employee_mail}', '${employee_dir}');`;

        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(201).json({ code: 201, message: "Employee inserted succesfully."});
        }
        return res.status(500).json({ code: 500, message: "An error has occurred while inserting the employee."})
    }
    return res.status(500).json({ code: 500, message: "Missing fields."})
})

// Delete an employee
employee.delete('/delete/:id([0-9]{1,3})', async (req, res, next) => {
    const query = `DELETE FROM employee WHERE employee_id = ${req.params.id};`;
    const rows = await db.query(query);
    if (rows.affectedRows == 1) {
        return res.status(200).json({ code: 200, message: "Employee deleted succesfully."});
    }
    return res.status(404).json({ code: 404, message: "Employee not found."});
})

// Update all from an employee
employee.put('/edit/:id([0-9]{1,3})', async (req, res, next) => {
    const { employee_name, employee_lastname, employee_phone, employee_mail, employee_dir} = req.body;
    if (employee_name && employee_lastname && employee_phone && employee_mail && employee_dir){
        let query = `UPDATE employee SET employee_name = '${employee_name}', employee_lastname = '${employee_lastname}', employee_phone = '${employee_phone}', `;
        query += `employee_mail = '${employee_mail}', employee_dir = '${employee_dir}' WHERE employee_id = ${req.params.id}`;

        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Employee modified successfully."});
        }
        return res.status(500).json({code: 500, message: "An error occurred while editing employee data."});
    }
    return res.status(500).json({code: 500, message: "Missing fields."});
})

// Update a field from an employee.
employee.patch('/edit/:id([0-9]{1,3})', async (req, res, next) => {
    if (req.body.employee_name){
        let query = `UPDATE employee SET employee_name='${req.body.employee_name}' WHERE employee_id=${req.params.id}`;
        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Field edited successfully."});
        }
        return res.status(500).json({ code: 500, message: 'An error occurred while editing employee data.'});
    }
    return res.status(500).json({ code: 500, message: 'Mising fields'});
})

// See all employees
employee.get('/all', async (req, res, next) => {
    const employees = await db.query("SELECT * FROM employee");
    return res.status(200).json({code: 200, message: employees})
})

module.exports = employee;