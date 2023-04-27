const jwt = require('jsonwebtoken');

const secret = 'IDQyBgu94HqCt8FFJ1pWzmPTY02Cvlzg';
const issuer = 'J1jkJcZER9W0Y0BVY-Qgow';
const expiryTime = Math.floor(Date.now() / 1000) + 300; // current time + 5 minutes

const payload = {
  iss: issuer,
  exp: expiryTime,
};

const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
console.log(token);
