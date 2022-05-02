const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  let member = message.mentions.users.first()

  let money = db.get(`money_${message.author.id}`);
  if(!money) money = 0

  const embed = new Discord.MessageEmbed()
  .setTitle('💸| Seu Dinheiro')
  .setDescription(`> Você tem $${money}`)
  .setThumbnail(message.author.displayAvatarURL())
  .setColor(color)
  .setFooter(config.footer.hpd)
  if(!member) return message.reply({ embeds: [embed] })

  let otherUserMoney = db.get(`money_${member.id}`)
  if(!otherUserMoney) otherUserMoney = 0

  const embed1 = new Discord.MessageEmbed()
  .setTitle(`💸| Dinheiro de ${member.tag}`)
  .setDescription(`> ${member.tag} tem $${otherUserMoney}`)
  .setThumbnail(member.displayAvatarURL())
  .setColor(color)
  .setFooter(config.footer.hpd)
  message.reply({ embeds: [embed1] })
}