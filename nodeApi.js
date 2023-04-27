const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

const secret = 'IDQyBgu94HqCt8FFJ1pWzmPTY02Cvlzg';
const issuer = 'J1jkJcZER9W0Y0BVY-Qgow';

app.use(cors());

app.get('/api/generateToken', (req, res) => {
  const expiryTime = Math.floor(Date.now() / 1000) + 300; // current time + 5 minutes

  const payload = {
    iss: issuer,
    exp: expiryTime,
  };

  const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
  
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
