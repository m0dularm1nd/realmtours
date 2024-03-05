import express from 'express';



const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({
    email: 'Hello motherfucker!',
    password: 'ba3bsa',
  });
});

app.post('/', (_req, res) => {
  res.send('bas yaaad');
});
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
