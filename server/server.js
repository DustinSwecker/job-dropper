const express = require("express");
const PORT = process.env.PORT || 3001;
const db = require('./config/connection')

const app = express();

db.once('open', () => {
  console.log('connected to db')
app.listen(PORT, () => {
  console.log("Server running on PORT 3001!");
})
})