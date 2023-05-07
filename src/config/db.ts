import mysql from "mysql";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_sw' ,
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error(`Database ERROR: ${err}`);
    return;
  }

  console.log("Connected to MYSQL");
});

export default connection;