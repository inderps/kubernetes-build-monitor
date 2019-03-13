const express = require('express');
const { getControllers } = require('./kubectl');

const app = express();

app.use(express.static('dist'));

app.get('/api/get_controllers', (req, res) => {
  res.send(getControllers());
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
