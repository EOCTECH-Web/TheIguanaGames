const mysql = require('mysql');
const express = require('express');



// Create connection
const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'BoomerSooner9934',
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...')
});

app.get()

