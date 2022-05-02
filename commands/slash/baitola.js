const { SlashCommandBuilder } = require('@discordjs/builders');
const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('baitola')
  .setDescription('[😆] Vê o quão baitola é alguém!')
  .addUserOption(option => option.setName('usuario').setDescription('Selecione um usuário!')),
  async execute(int, client, color, config) {
    let numero = Math.floor(Math.random() * 100) + 0;

    let member = int.options.getUser('usuario');

    if(!member) member = int.user;

    const image = member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

    //Avatar do usuário gay
    let bg = await Canvas.loadImage("https://i.imgur.com/vBCTgtQ.png");
    let img = await Canvas.loadImage(image);

    const canvas = Canvas.createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
  
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.drawImage(bg, 0, 0, img.width, img.height);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'baitola.png')

    let channel = client.guilds.cache.get("777870393137430589").channels.cache.get("777870601243197451")
    channel.send({ files: [attachment] }).then(msg => {
      msg.attachments.forEach(attach => {
        const url = attach.url;

        let embedono = new Discord.MessageEmbed()
        .setTitle(`:rainbow_flag: │ Teste de Baitola!`)
        .setDescription(`${member.username} é **0%** Baitola`)
        .setThumbnail(url)
        .setColor(color)
        if(member.id === "732549418829611098") return int.reply({ embeds: [embedono] })

        let embed = new Discord.MessageEmbed()
        .setTitle(`:rainbow_flag: │ Teste de Baitola!`)
        .setDescription(`${member.username} é **${numero}%** Baitola`)
        .setThumbnail(url)
        .setColor(color)
        int.reply({ embeds: [embed] })
      })
    })
  },
};