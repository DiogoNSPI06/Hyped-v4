const express = require('express');
var router = express.Router();  

router.get('/', function(req, res) {
  res.json({ message: 'Oh, looks like you are trying to use our api, follow the link below to read the docs: https://www.hypeds.com/docs', note: "Api under development. Please wait until launch." });
});

module.exports = router;