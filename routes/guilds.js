const express = require('express');
const db = require('quick.db')
var router = express.Router();  

router.get('/:guild', function(req, res) {
  let nm = db.get(`${req.params.guild}_guildName`)
  let img = db.get(`${req.params.guild}_guildImage`)
  let botmode = db.get(`botmode_${req.params.guild}`)

  let on = 'Ligado'
  let on2 = 'Ligado'
  let on3 = 'Ligado'
  let on4 = 'Ligado'
  let on5 = 'Ligado'
  let on6 = 'Ligado'

  let invBlock = db.get(`InviteBlocker_${req.params.guild}`)
  let captchaSys = db.get(`CapchaIsEnabled_${req.params.guild}`)
  let welcomeSys = db.get(`${req.params.guild}_welcomecanal`)
  let autoroleSys = db.get(`autorole_role_${req.params.guild}`)
  let logsSys = db.get(`LogsChannel_${req.params.guild}`)
  let sugestionSys = db.get(`sugestaoChat_${req.params.guild}`)

  if(!captchaSys || captchaSys === "false") on = 'Desligado'
  if(!invBlock) on2 = 'Desligado'
  if(!welcomeSys) on3 = "Desligado"
  if(!autoroleSys) on4 = "Desligado"
  if(!logsSys) on5 = "Desligado"
  if(!sugestionSys) on6 = "Desligado"
  if(!botmode) botmode = "Normal"

  res.json({ name: nm, image: img, botmode: botmode, systems: { inviteblocker: on2, captcha: on, welcomer: on3, autorole: on4, logs: on5, sugestions: on6 } })
});

router.get('/', function(req, res) {
  res.json({ message: 'Please type an guild id example: /v4/guilds/817408279474733116', note: "Api under development. Please wait until launch." })
})

module.exports = router;