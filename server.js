const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// express middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// handle unsupported requests
app.use((req, res) => {
  res.status(404).end();
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})