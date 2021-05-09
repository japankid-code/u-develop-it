const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

// express middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'election'
  },
  console.log("connected to the election database!!")
);

db.query('SELECT * FROM candidates', (err, rows) => {
  console.log(rows);
})

// handle unsupported requests
app.use((req, res) => {
  res.status(404).end();
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})