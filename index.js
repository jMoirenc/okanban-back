require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Okanban back')
})

app.listen(PORT, () => {
  console.log(`Okanban back running on ${PORT}`)
})