const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Select an Language!`)
  .setDescription(`> Click in the buttons below to select a Language.`)
  .setFooter(config.footer.hpd)
  .setColor(color);

  const embed2 = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Language defined!`)
  .setDescription(`> You can now ignore this message!`)
  .setFooter(config.footer.hpd)
  .setColor(color);

  const btn1 = new Discord.MessageButton()
  .setCustomId(`languagebtn1_${message.channel.id}_${message.author.id}`)
  .setLabel("English")
  .setEmoji("🇺🇸")
  .setStyle("PRIMARY")

  const btn1Off = new Discord.MessageButton()
  .setCustomId(`languagebtn1_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("English")
  .setEmoji("🇺🇸")
  .setStyle("PRIMARY")
  .setDisabled(true);

  const btn2Off = new Discord.MessageButton()
  .setCustomId(`languagebtn2_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("Português")
  .setEmoji("🇧🇷")
  .setStyle("SECONDARY")
  .setDisabled(true);

  const btn2 = new Discord.MessageButton()
  .setCustomId(`languagebtn2_${message.channel.id}_${message.author.id}`)
  .setLabel("Português")
  .setEmoji("🇧🇷")
  .setStyle("SECONDARY");

  const row = new Discord.MessageActionRow()
  .addComponents(btn1, btn2);

  const row1 = new Discord.MessageActionRow()
  .addComponents(btn1Off, btn2);

  const row2 = new Discord.MessageActionRow()
  .addComponents(btn1Off, btn2Off);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

  message.reply({ embeds: [embed], components: [row] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `languagebtn1_${message.channel.id}_${message.author.id}`) {

        db.set(`botLang_${message.guild.id}`, "english")

        await b.update({ embeds: [embed2], components: [row1] })
      }

      if(b.customId === `languagebtn2_${message.channel.id}_${message.author.id}`) {

        db.delete(`botLang_${message.guild.id}`)

        await b.update({ embeds: [embed2], components: [row2] })
      }
    })
  })
}

