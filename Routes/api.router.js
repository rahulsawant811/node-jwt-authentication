const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: 'Inside the router'
  });
});

router.post('/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err){
      res.sendStatus(403);
    }

    res.json({
      msg: 'Post created',
      authData
    });
  });
});

router.post('/login', (req, res) => {
  const userData = {
    id : 1,
    username: 'rahul',
    email: 'rahulsawant811@gmail.com'
  }

  jwt.sign({user: userData}, 'secretkey', {expiresIn: '1500s'}, (err, token) => {
    res.json({
      token: token
    });
  });
});

function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
