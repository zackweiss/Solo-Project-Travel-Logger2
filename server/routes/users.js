const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

const saltRounds = 10;


router.post('/signup', async(req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser.username);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({username: req.body.username});
    
    await bcrypt.compare(req.body.password, user.password);

    res.status(200).json('Logged in!');
    
  }
  catch(err) {
    res.status(500).json('Incorrect username or password!');
  }
});

module.exports = router;