const express = require('express');
const db = require('quick.db')
var router = express.Router();  

router.get('/:id', function(req, res) {
  let nick = db.get(`${req.params.id}_nickname`)
  let avt = db.get(`${req.params.id}_avatar`)
  let money = db.get(`money_${req.params.id}`)
  let msgs = db.get(`${req.params.id}_points`)
  let about = db.get(`sobremim_${req.params.id}`)
  let flows = db.get(`followers_${req.params.id}`)
  let flowi = db.get(`following_${req.params.id}`)
  let uuid = db.get(`uuid_${req.params.id}`)
  let premium = db.get(`userIsPremium_${uuid}`)

  if(!premium) premium = false
  if(!uuid) uuid = "User is not Documented"

  res.json({ nickname: nick, avatarURL: avt, globalMoney: money, messages: msgs, aboutme: about, followers: flows, following: flowi, premium: premium, hypedID: uuid })
});

router.get('/', function(req, res) {
  res.json({ message: 'Please type an user id example: /v4/users/732549418829611098', note: "Api under development. Please wait until launch." })
})

module.exports = router;