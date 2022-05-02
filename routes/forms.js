const express = require('express');
const db = require('quick.db')
var router = express.Router();
//req.params.id

router.get('/:id/:uuid', function(req, res) {
  let id = db.get(`SessionID_${req.params.uuid}`)
  
  if(req.params.id !== id) {
    res.json({ message: "Invalid request. Please make sure that in the ID field is a real session ID" })
  } else {
    res.sendFile("/home/runner/Hyped-V40-1/routes/html/form.html")
  }
});

router.post('/:id/:uuid', function(req, res) {
  db.set(`UserAnswer_${req.params.uuid}`, req.body.answer1)
  db.set(`UserAnswer2_${req.params.uuid}`, req.body.answer2)
  db.set(`UserAnswer3_${req.params.uuid}`, req.body.answer3)
  db.set(`UserAnswer4_${req.params.uuid}`, req.body.answer4)

  db.delete(`SessionID_${req.params.uuid}`)
  
  res.sendFile("/home/runner/Hyped-V40-1/routes/html/complete.html")
})

module.exports = router;