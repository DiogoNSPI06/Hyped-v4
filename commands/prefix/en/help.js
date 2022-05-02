const Discord = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle("HYPED | Help menu!")
  .addField(`🔗| Add me`, `[Click Here](${config.URL.addBot})`)
  .addField(`💿| My commands`, `*To access the categories click on the buttons matching the emojis!*`)
  .addField(`<:pasta:786293846156771379>|CATOGORIES:`, `
  🔍**| Informative**
  ⚙️**| Utilitaries**
  🔧**| Staff**
  😆**| Fun**
  📷**| Photoshop**
  🛠️**| Configuration**
  ↩️| *Voltar*`)
  .setFooter(`Quer ver isso em português? Use ${prefix}setlanguage !`)
  .setImage(`https://i.imgur.com/HpI5ppM.png`)

  const bInfo = new Discord.MessageButton()
  .setEmoji("🔍")
  .setCustomId(`bInfo_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bUtils = new Discord.MessageButton()
  .setEmoji("⚙️")
  .setCustomId(`bUtils_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bStaff = new Discord.MessageButton()
  .setEmoji("🔧")
  .setCustomId(`bStaff_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bFun = new Discord.MessageButton()
  .setEmoji("😆")
  .setCustomId(`bFun_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bPhoto = new Discord.MessageButton()
  .setEmoji("📷")
  .setCustomId(`bPhoto_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bConfig = new Discord.MessageButton()
  .setEmoji("🛠️")
  .setCustomId(`bConfig_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const bBack = new Discord.MessageButton()
  .setEmoji("↩️")
  .setCustomId(`bBack_${message.author.id}_${message.guild.id}`)
  .setStyle("PRIMARY");

  const row = new Discord.MessageActionRow()
  .addComponents(bInfo, bUtils, bStaff, bFun);

  const row2 = new Discord.MessageActionRow()
  .addComponents(bPhoto, bConfig, bBack);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
  
  message.reply({ embeds: [embed], components: [row, row2] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `bInfo_${message.author.id}_${message.guild.id}`) {
        const embedInfo = new Discord.MessageEmbed()
        .setTitle("Category | 🔍 Informative")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}help\` - Show this menu. \n \`${prefix}avatar <user>\` - Show the user's avatar. \n \`${prefix}profile <user>\` - Show the user's HYPED profile. \n \`${prefix}points\` Show how many XP you have. \n \`${prefix}bal\`- Show's your money in bank. \n \`${prefix}ping\` - Bot's delay/API delay. \n \`${prefix}serverinfo\` - Informations about this server. \n \`${prefix}servericon\` - Icon of the server. \n \`${prefix}userinfo\` - User's informations. \n \`${prefix}botinfo\` - Bot's informations. \n \`${prefix}uptime\` - The time when i wake up.`)

        b.update({ embeds: [embedInfo], components: [row, row2] })
      }
      if(b.customId === `bUtils_${message.author.id}_${message.guild.id}`) {
        const embedUtils = new Discord.MessageEmbed()
        .setTitle("Category | ⚙️ Utilitaries")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}daily\` - Te dá até $ 10.000,00 por Dia \n \`${prefix}bal\` - Te mostra quanto dinheiro você tem. \n \`${prefix}loja\` - Te permite comprar decorações para seu perfil. \n \`${prefix}tempo <cidade>\` - Motra como está o tempo na sua cidade. \n \`${prefix}encurta <url>\` - Encurta uma url. \n \`${prefix}verify\` - Faz a verificação do captcha(obs: sómente se seu servidor estiver configurado) \n \`${prefix}urlbuton\` - Cria um botão com Url. \n \`${prefix}embed\` - Cria um embed customizado.`)

        b.update({ embeds: [embedUtils], components: [row, row2] })
      }
      if(b.customId === `bStaff_${message.author.id}_${message.guild.id}`) {
        const embedStaff = new Discord.MessageEmbed()
        .setTitle("Category | 🔧 Staff")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}clear <1-99>\` - Limpa as mensagens! \n \`${prefix}aviso <usuário>\` - Avisa um usuário. \n \`${prefix}avisos <usuário>\` - Mostra quantos avisos tem um usuário. \n \`${prefix}clearwarns <usuário>\` - Remove os avisos de um usuário. \n \`${prefix}ban <usuário> <razão>\` - Bane um usuário. \n \`${prefix}mute <usuário> <tempo> <razão>\` - Muta um membro. \n \`${prefix}unban <usuário>\` - Remove o banimento de um usuário. \n \`${prefix}ticket <create ou delete>\` - Cria ou deleta um ticket \n \`${prefix}slowmode <tempo>\` - Define um timeout no chat. \n \`${prefix}lock\` - Tranca um canal. \n \`${prefix}unlock\` - Destranca um canal.`)

        b.update({ embeds: [embedStaff], components: [row, row2] })
      }
      if(b.customId === `bFun_${message.author.id}_${message.guild.id}`) {
        const embedFun = new Discord.MessageEmbed()
        .setTitle("Category | 😆 Fun")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}bolsonaro <mensagem ou avatar> <usuário>\` - Faz o bolsonaro apontar para uma mensagem ou um avatar. \n \`${prefix}simsimi <mensagem>\` - Fale com o simsimi. \n \`${prefix}fakemsg <usuário> <mensagem>\` - Faz uma mensagem falsa com o avatar/nome de outra pessoa. \n \`${prefix}reddit\` - Envia memes do reddit. \n \`${prefix}reverse <mensagem>\` - Inverte sua mensagem. \n \`${prefix}hackear <usuário>\` - Hackeia um usuário. \n \`${prefix}baitola\` - Vê o quanto baitola é o usuário. \n \`${prefix}howgay <usuário>\` - Vê o quanto gay é o usuário. \n \`${prefix}tiodopave\` - Envia uma piada de tiozão. \n \`${prefix}8ball <mensagem>\` - Pergunte uma coisa para a bola da verdade. \n \`${prefix}say <mensagem>\` - Me faz falar alguma coisa. \n \`${prefix}morse <mensagem>\` - Traduz ou escreve código morse. \n \`${prefix}tapa <usuário>\` Dá um tapa em alguém.`)

        b.update({ embeds: [embedFun], components: [row, row2] })
      }
      if(b.customId === `bPhoto_${message.author.id}_${message.guild.id}`) {
        const embedPhoto = new Discord.MessageEmbed()
        .setTitle("Category | 📷 Photoshop")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}jail <usuário>\` - Prende um usuário. \n \`${prefix}blur <usuário>\` - Borra o avatar do usuário. \n \`${prefix}beautiful <usuário>\` - Meme beautiful com o avatar do usuário. \n \`${prefix}triggered <usuário>\` - Cria o meme triggered com o avatar do usuário. \n \`${prefix}comunism <usuário>\` - Cria o meme comunismo com o avatar do usuário. \n \`${prefix}wasted <usuário>\` - Cria o meme wasted com o avatar do usuário. \n \`${prefix}gay\` - Faz o avatar do usuário ter a bandeira LGBT. \n \`${prefix}delete <usuário>\` - Cria o meme delete com o avatar do usuário. \n \`${prefix}wanted <usuário>\` - Cria o meme wanted com o avatar do usuário.`)

        b.update({ embeds: [embedPhoto], components: [row, row2] })
      }
      if(b.customId === `bConfig_${message.author.id}_${message.guild.id}`) {
        const embedConfig = new Discord.MessageEmbed()
        .setTitle("Category | 🛠️ Configuration")
        .setColor(color)
        .setDescription(`My prefix in this server: \`${prefix}\``)
        .addField('> My commands:', `\n \`${prefix}setprefix <prefixo>\` - Define um prefixo para o seu servidor \n \`${prefix}setcolor <cor>\` - Define uma cor para os embeds. \n \`${prefix}setlogs <canal>\` - Define um canal de auditoria do servidor. \n \`${prefix}setbotmode\` - Define um mode para o seu servidor. \n \`${prefix}setblocker <on ou off>\` - Liga ou desliga o sistema anti-convite. \n \`${prefix}ticket <on ou off>\` - Liga ou desliga o sistema de ticket. \n \`${prefix}setcaptcha <on ou off> <id do cargo>\` - Configura o captcha no seu servidor. \n \`${prefix}setwelcome <canal>\` - Define um canal para boas vindas. \n \`${prefix}setautorole <on ou off> <id do cargo>\` - Adiciona o cargo ao usuário entrar no servidor. \n \`${prefix}sobremim <mensagem>\` - Define uma bio para seu perfil no \`${prefix}perfil\``)

        b.update({ embeds: [embedConfig], components: [row, row2] })
      }
      if(b.customId === `bBack_${message.author.id}_${message.guild.id}`) {
        b.update({ embeds: [embed], components: [row, row2] })
      }
    })
  })
}