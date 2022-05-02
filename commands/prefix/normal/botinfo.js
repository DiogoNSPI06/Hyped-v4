const Discord = require('discord.js');
const os = require('os'); //Para Obter Informações do Servidor Que Hospeda o Bot

module.exports.run = async (client, message, args, prefix, color, config) => {
  //Uptime
  let totalSecondsp = client.uptime / 1000;
  let daysp = Math.floor(totalSecondsp / 86400);
  let hoursp = Math.floor(totalSecondsp / 3600);
  totalSecondsp %= 3600;
  let minutesp = Math.floor(totalSecondsp / 60);
  let secondsp = totalSecondsp % 60;

  let uptime = `${daysp.toFixed()} dias  ${hoursp.toFixed()} horas ${minutesp.toFixed()} minutos ${secondsp.toFixed()} segundos.`

  let count = 0; 
   client.guilds.cache.forEach((guild) => {
    count += guild.memberCount 
  })

  //Informações do Servidor Que Hospeda o Bot
  let cpu = Math.round(process.cpuUsage().system / 1024 / 1024).toString()
  if(cpu < 1) {
      cpu = (process.cpuUsage().system / 1024 / 1024).toFixed(2)
  }
  let ram = Math.round(process.memoryUsage().rss / 1024 / 1024).toString()
  let modelo = os.cpus().map((i) => `${i.model}`)[0]

  const inline = true
  
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setAuthor('🤖| Informações Sobre Mim |🙂')
  .setDescription(config.client.description)
  .addField('> **<a:HYbaiacu:756119666971377756>| Versão do Bot**:', `Neste Servidor, a Versão rodando é a: **${config.client.version}**`)
  .addField("<:HTverified:895688644877234246><:HTbot:895688644935958538>| Informações Principais:",`> <:HYdev:756119645215260753> - Meu Criador: [${config.client.owner.name}](https://discord.com/users/732549418829611098) \n > 🔧 - Meu prefixo: **${prefix}** \n > 📎 - Meu id: ${config.client.id}`)
  .addField("<:HTdev:895637399122616362>| Informações Técnicas:", `> 🌎 - Servidores: ${client.guilds.cache.size} \n > 👫 - Usuários: ${count} \n > % - Uso da CPU: ${cpu} \n > <:HYram:756119655948484650> - Uso da RAM: ${ram}MB \n > <:HYxeon:756119645379100692> - Modelo da CPU: ${modelo} \n > 🗓️ - Estou online a: **${uptime}** \n > 📊 - Fui criado em: *16/09/2020, às 11:00:47*`)
  .addField("<:pasta:786293846156771379> | Links", `> 🖥️| Meu Site: [Clique Aqui!](${config.URL.website}) \n > 👾| Status da Host: [Clique Aqui!](${config.URL.statusPage}) \n > 📌| Vote Em Mim: [Clique Aqui!](https://www.hypeds.com/vote) \n > ⚙️| Meu Código: [Clique Aqui!](${config.URL.github})`)
  .setFooter(`2022 © H Y P E D.`)
  .setTimestamp()
  
  /*
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}`)
  .setAuthor('🤖| Informações Sobre Mim 🙂')
  .setDescription(config.client.description)
  .addField('> **<a:HYbaiacu:756119666971377756>| Versão do Bot**:', `Neste Servidor, a Versão rodando é a: **${config.client.version}**`)
  .addField('> **🔧| Meu Prefixo**', `**${prefix}**`, inline)
  .addField('<:HYdev:756119645215260753>| Meu Criador', `${config.owner.name}`, inline)
  .addField('> **📌| Meu nick**', `${config.client.name}`)
  .addField('> **📎| Meu ID**', config.client.id, inline)
  .addField('**🌎| Servidores**', `${client.guilds.cache.size}`, true)
  .addField('**👫| Usuários**', `${count}`, inline)
  .addField('> 🖥️| Host', `https://repl.it`)
  .addField(`> %| Uso da cpu:`, `${cpu}%`, true)
  .addField(`<:HYram:756119655948484650>| Uso da ram`, `${ram}MB`, true)
  .addField(`> <:HYxeon:756119645379100692>| Modelo da cpu`, `${modelo}`)
  .addField('> **👾| Status da Host**',`[Clique Aqui!](${config.URL.statusPage})`,inline,true)
  .addField('> **🗓️| Estou online a**', `**${uptime}**`)
  .addField('> **📊| Fui Criado em**', `*16/09/2020, às 11:00:47*`)
  .addField('> **🖥️| Meu Site**', `[Clique Aqui!](${config.URL.website})`)
  .addField('> **📌| Vote Em Mim!**', `[Clique Aqui!](https://www.hypeds.com/vote)`)
  .addField('> **⚙️| Meu Código:**', `[Clique Aqui!](${config.URL.github})`)
  .addField('<a:HYbaiacu:756119666971377756> | Atualize algumas informações:', '**Clique em ↩**')
  .setFooter(`2022 © H Y P E D.`)
  .setTimestamp()
  */
  message.reply({ embeds: [embed] }).then(msg => {
    msg.react('↩')
  })
}