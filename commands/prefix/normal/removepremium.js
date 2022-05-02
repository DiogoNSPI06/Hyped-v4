const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {

  if(message.author.id !== config.owner.id) return message.reply(":x: | Apenas meu dono pode usar essse comando!")

  let member = message.mentions.members.first()
  let uuid = db.get(`uuid_${member.user.id}`)

  if(!uuid) {
    db.add(`uuidNumber`, 1)
    let uuidNumber = db.get(`uuidNumber`)
    db.set(`uuid_${member.user.id}`, uuidNumber)
  }

  let premium = db.get(`userIsPremium_${uuid}`)
  
  if(!member){
    message.reply(`:x: | Mencione um Membro!`)
  } else {
    
  if(premium === true){
     db.set(`userIsPremium_${uuid}`, false)
     message.reply(`:white_check_mark: | Removi o premium de: ${member.user.username}`)
     
     let role = message.member.guild.roles.cache.get("922837264030109697");
     member.roles.remove(role)
    
   } else {
    message.reply(":x: | Este membro já não tem VIP")
   }
 }
}