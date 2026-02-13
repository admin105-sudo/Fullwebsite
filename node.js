const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.send("Login successful from backend");
});

app.listen(3000);
