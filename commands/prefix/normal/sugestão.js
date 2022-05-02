const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}sugestão`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}sugestão <mensagem> `)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  let sugestao = args.join(' ')

  let chatDeSugestão = db.get(`sugestaoChat_${message.guild.id}`)
  if(!chatDeSugestão) {
    return message.reply(config.reply.modIsOff)
  } else {
    message.delete()
    const sugestaoEmbed = new Discord.MessageEmbed()
    .setTitle(`:thumbsup: | Sugestão de ${message.author.username} `)
    .setDescription(sugestao)
    .setColor(color)
    .setFooter(config.footer.hpd);
    
    const channel = message.guild.channels.cache.get(chatDeSugestão)
    channel.send({ embeds: [sugestaoEmbed] }).then(m => {
      m.react('✅')
      m.react('❌')
    })
  } 
}