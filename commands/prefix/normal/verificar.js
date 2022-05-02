const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(message.channel.id !== config.client.channel) {
    return message.reply({ content: ":x: | Este comando pode apenas ser utilizado no canal de verificação!" })
  } else {
    try {
      let m = await message.author.send("<a:loading:785559393449017394> | Aguarde, estou criando sua Session!");

      let random = '';
      let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
      for(var i = 0; i < 6; i++) {
        random = random + dict.charAt(Math.floor(Math.random() * dict.length));
      }
      let formID = `F${random}`;
      db.set(`SessionID_${message.author.id}`, formID)
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`👑 | Verificação para Staff`)
      .setDescription(`> [Clique aqui](https://v4.hypeds.com/api/forms/${formID}/${message.author.id})`)
      .setColor(color)
      .setFooter(config.footer.hpd);
      
      await message.delete()
      message.channel.send(`<@${message.author.id}> | Eu enviei o formulário no seu privado!`)
      setTimeout(() => { m.edit({ embeds: [embed] } )})

      let channel = message.guild.channels.cache.get("817408280140841003")

      channel.send(`👑 | Verificação recebida, de <@${message.author.id}> \n https://v4.hypeds.com/api/results/${message.author.id}`)
      
    } catch (err) {
      if(err){
        console.log(err)
        return message.channel.send(`:x: | <@${message.author.id}> - Não consegui enviar o formulário no seu privado! Verifique se o mesmo está aberto!`) 
      }
    }
  }
}