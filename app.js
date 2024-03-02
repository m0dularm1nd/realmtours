const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    email: 'Hello motherfucker!',
    password: 'manyka',
  });
});

app.post('/', (req, res) => {
  res.send('bas yaaad');
});
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
