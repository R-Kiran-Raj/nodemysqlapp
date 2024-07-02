const mysql = require("mysql");

const db = mysql.createConnection({
  host: "nodedatabase.crymeewco8jp.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "testing12375848",
  database: "nodedatabase",
});

// open the MySQL connection
db.connect((error) => {
  if (error) throw error;
  console.log("DB connected");
});

module.exports = db;
