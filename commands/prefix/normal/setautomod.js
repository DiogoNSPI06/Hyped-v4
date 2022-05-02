const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }
  
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}setautomod`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}setautomod <on || off>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Use **on** para ativar o comando e **off** para desativar.`)
  .setFooter(config.footer.hgc);
   
  if(!args[0]) return message.reply({ embeds: [embd] })

  if(args[0] === "off") {
    message.reply(`:x: | Eu desativei o automod!`)
    db.set(`automodIsEnabled_${message.guild.id}`, false)
    return;
  }
  if(args[0] === "on") db.set(`automodIsEnabled_${message.guild.id}`, true)

  message.reply({ content: `:white_check_mark: | Automod ativado! Eu vou excluir links maliciosos, impedir que mandem mensagens muito grandes e evitar possíveis ataques "Self Bot"!` })
}