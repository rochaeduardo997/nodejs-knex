const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "db_knex"
  }
});

module.exports = knex;

// MariaDB [(none)]> CREATE DATABASE db_knex;
// Query OK, 1 row affected (0.001 sec)
// MariaDB [(none)]> USE db_knex;
// Database changed
// MariaDB [db_knex]>
// MariaDB [db_knex]>
// MariaDB [db_knex]>
// MariaDB [db_knex]> CREATE TABLE tbl_users(
//     -> id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     -> username VARCHAR(50) NOT NULL UNIQUE,
//     -> email VARCHAR(100) NOT NULL UNIQUE,
//     -> password VARCHAR(20) NOT NULL,
//     -> createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     -> updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     -> );
