const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(message.author.id !== config.owner.id) return message.reply(":x: | Apenas meu dono pode usar essse comando!")

  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 18; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }

  let randomKey = `PKvpId${random}e621`;

  message.channel.send(randomKey)
  db.set(`key_${randomKey}`, true)
}