const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  let uuid = db.get(`uuid_${message.author.id}`)
  
  if(!uuid) {
    db.add(`uuidNumber`, 1)
    let uuidNumber = db.get(`uuidNumber`)
    db.set(`uuid_${message.author.id}`, uuidNumber)
  }
  let premium = db.get(`userIsPremium_${uuid}`)
  
  let key = args[0]
  
  if(!key) return message.reply(`:x: | Escreva a sua Key!`)

  let isKey = db.get(`key_${args[0]}`)

  if(premium === true) return message.reply(":x: | Você já tem premium!")

  if(isKey === true) {
    message.channel.send(":white_check_mark: | Key Resgatada! \n Aproveite seus benefícios premium!")
    db.delete(`key_${args[0]}`)

    db.set(`userIsPremium_${uuid}`, true)

    let role = message.member.guild.roles.cache.get("922837264030109697");
    message.member.roles.add(role)
    
  } else {
    message.channel.send(":x: | Escreva uma Key válida!")
  }
}