const express = require("express");
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// express middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use routes from index.js located in ./routes/apiRoutes
app.use('/api', apiRoutes);

// handle unsupported requests
app.use((req, res) => {
  res.status(404).end();
})

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })
})