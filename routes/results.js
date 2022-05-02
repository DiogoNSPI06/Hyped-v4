const express = require('express');
const db = require('quick.db')
var router = express.Router();
//req.params.id

router.get('/:uuid', function(req, res) {
  let answer1 = db.get(`UserAnswer_${req.params.uuid}`)
  let answer2 = db.get(`UserAnswer2_${req.params.uuid}`)
  let answer3 = db.get(`UserAnswer3_${req.params.uuid}`)
  let answer4 = db.get(`UserAnswer4_${req.params.uuid}`)

  let username = db.get(`${req.params.uuid}_nickname`)
  
  res.json({ user: username, answers: { answer1: answer1, answer2: answer2, answer3: answer3, answer4: answer4 } })
});

module.exports = router;