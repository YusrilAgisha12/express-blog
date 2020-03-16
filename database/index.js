const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "express_blog"
});

module.exports = connection;