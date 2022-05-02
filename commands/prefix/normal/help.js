const Discord = require('discord.js')
const localDB = require('quick.db')

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(localDB.get(`botLang_${message.guild.id}`)) {
    return console.log("✅ | Excutando comando de Help em inglês")
  }
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle("HYPED | Menu de ajuda!")
  .addField(`🔗| Me Adicione`, `[Clique Aqui](${config.URL.addBot})`)
  .addField(`💿| Meus Comandos`, `*Para acessar as abas basta clicar de acordo com o que procura!*`)
  .addField(`<:pasta:786293846156771379>|CATEGORIAS:`, `
  🔍**| Info**
  ⚙️**| Utilitários**
  🔧**| Staff**
  😆**| Diversão**
  📷**| Photoshop**
  🛠️**| Config**
  ↩️| *Voltar*`)
  .setFooter(`Wanna see this in english? Use ${prefix}setlanguage !`)
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

  const collector = message.channel.createMessageComponentCollector({ filter, time: 150000 });
  
  message.reply({ embeds: [embed], components: [row, row2] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `bInfo_${message.author.id}_${message.guild.id}`) {
        const embedInfo = new Discord.MessageEmbed()
        .setTitle("Categoria | 🔍 Informativos")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}ajuda\` ou \`${prefix}help\` - Exibe este menu. \n \`${prefix}avatar <usuário>\` - Mostra o avatar do usuário. \n \`${prefix}perfil <usuário>\` - Mostra o perfil HYPED do usuário. \n \`${prefix}pontos\` Motra o seu XP no Hyped.\n \`${prefix}bal\`- Motra seu dinheiro no banco. \n \`${prefix}ping\` - Mostra o delay do bot-servidor. \n \`${prefix}serverinfo\` - Mostra as informações deste servidor. \n \`${prefix}servericon\` - Mostra o ícone do servidor. \n \`${prefix}userinfo\` - Mostra as informações de um determinado usuário. \n \`${prefix}botinfo\` - Mostra as informações do bot. \n \`${prefix}uptime\` - Mostra o horário em que eu acordei.`)

        b.update({ embeds: [embedInfo], components: [row, row2] })
      }
      if(b.customId === `bUtils_${message.author.id}_${message.guild.id}`) {
        const embedUtils = new Discord.MessageEmbed()
        .setTitle("Categoria | ⚙️ Utilitários")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}daily\` - Te dá até $ 10.000,00 por Dia \n \`${prefix}bal\` - Te mostra quanto dinheiro você tem. \n \`${prefix}loja\` - Te permite comprar decorações para seu perfil. \n \`${prefix}tempo <cidade>\` - Motra como está o tempo na sua cidade. \n \`${prefix}encurta <url>\` - Encurta uma url. \n \`${prefix}verify\` - Faz a verificação do captcha(obs: sómente se seu servidor estiver configurado) \n \`${prefix}urlbuton\` - Cria um botão com Url. \n \`${prefix}embed\` - Cria um embed customizado.`)

        b.update({ embeds: [embedUtils], components: [row, row2] })
      }
      if(b.customId === `bStaff_${message.author.id}_${message.guild.id}`) {
        const embedStaff = new Discord.MessageEmbed()
        .setTitle("Categoria | 🔧 Staff")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}clear <1-99>\` - Limpa as mensagens! \n \`${prefix}aviso <usuário>\` - Avisa um usuário. \n \`${prefix}avisos <usuário>\` - Mostra quantos avisos tem um usuário. \n \`${prefix}clearwarns <usuário>\` - Remove os avisos de um usuário. \n \`${prefix}ban <usuário> <razão>\` - Bane um usuário. \n \`${prefix}mute <usuário> <tempo> <razão>\` - Muta um membro. \n \`${prefix}unban <usuário>\` - Remove o banimento de um usuário. \n \`${prefix}ticket <create ou delete>\` - Cria ou deleta um ticket \n \`${prefix}slowmode <tempo>\` - Define um timeout no chat. \n \`${prefix}lock\` - Tranca um canal. \n \`${prefix}unlock\` - Destranca um canal.`)

        b.update({ embeds: [embedStaff], components: [row, row2] })
      }
      if(b.customId === `bFun_${message.author.id}_${message.guild.id}`) {
        const embedFun = new Discord.MessageEmbed()
        .setTitle("Categoria | 😆 Diversão")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}bolsonaro <mensagem ou avatar> <usuário>\` - Faz o bolsonaro apontar para uma mensagem ou um avatar. \n \`${prefix}simsimi <mensagem>\` - Fale com o simsimi. \n \`${prefix}fakemsg <usuário> <mensagem>\` - Faz uma mensagem falsa com o avatar/nome de outra pessoa. \n \`${prefix}reddit\` - Envia memes do reddit. \n \`${prefix}reverse <mensagem>\` - Inverte sua mensagem. \n \`${prefix}hackear <usuário>\` - Hackeia um usuário. \n \`${prefix}baitola\` - Vê o quanto baitola é o usuário. \n \`${prefix}howgay <usuário>\` - Vê o quanto gay é o usuário. \n \`${prefix}tiodopave\` - Envia uma piada de tiozão. \n \`${prefix}aigame\` - Jogue contra uma ai \n \`${prefix}8ball <mensagem>\` - Pergunte uma coisa para a bola da verdade. \n \`${prefix}say <mensagem>\` - Me faz falar alguma coisa. \n \`${prefix}morse <mensagem>\` - Traduz ou escreve código morse. \n \`${prefix}tapa <usuário>\` Dá um tapa em alguém.`)

        b.update({ embeds: [embedFun], components: [row, row2] })
      }
      if(b.customId === `bPhoto_${message.author.id}_${message.guild.id}`) {
        const embedPhoto = new Discord.MessageEmbed()
        .setTitle("Categoria | 📷 Photoshop")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}jail <usuário>\` - Prende um usuário. \n \`${prefix}blur <usuário>\` - Borra o avatar do usuário. \n \`${prefix}beautiful <usuário>\` - Meme beautiful com o avatar do usuário. \n \`${prefix}triggered <usuário>\` - Cria o meme triggered com o avatar do usuário. \n \`${prefix}comunism <usuário>\` - Cria o meme comunismo com o avatar do usuário. \n \`${prefix}wasted <usuário>\` - Cria o meme wasted com o avatar do usuário. \n \`${prefix}gay\` - Faz o avatar do usuário ter a bandeira LGBT. \n \`${prefix}delete <usuário>\` - Cria o meme delete com o avatar do usuário. \n \`${prefix}wanted <usuário>\` - Cria o meme wanted com o avatar do usuário.`)

        b.update({ embeds: [embedPhoto], components: [row, row2] })
      }
      if(b.customId === `bConfig_${message.author.id}_${message.guild.id}`) {
        const embedConfig = new Discord.MessageEmbed()
        .setTitle("Categoria | 🛠️ Configuração")
        .setColor(color)
        .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
        .addField('> Meus Comandos:', `\n \`${prefix}setprefix <prefixo>\` - Define um prefixo para o seu servidor \n \`${prefix}setcolor <cor>\` - Define uma cor para os embeds. \n \`${prefix}setlogs <canal>\` - Define um canal de auditoria do servidor. \n \`${prefix}setbotmode\` - Define um mode para o seu servidor. \n \`${prefix}setblocker <on ou off>\` - Liga ou desliga o sistema anti-convite. \n \`${prefix}ticket <on ou off>\` - Liga ou desliga o sistema de ticket. \n \`${prefix}setcaptcha <on ou off> <id do cargo>\` - Configura o captcha no seu servidor. \n \`${prefix}setsugestão <canal> - O Canal que eu enviarei as sugestões do servidor.\` \n \`${prefix}setwelcome <canal>\` - Define um canal para boas vindas. \n \`${prefix}setautorole <on ou off> <id do cargo>\` - Adiciona o cargo ao usuário entrar no servidor. \n \`${prefix}sobremim <mensagem>\` - Define uma bio para seu perfil no \`${prefix}perfil\``)

        b.update({ embeds: [embedConfig], components: [row, row2] })
      }
      if(b.customId === `bBack_${message.author.id}_${message.guild.id}`) {
        b.update({ embeds: [embed], components: [row, row2] })
      }
    })
  })
}