const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('botstatus')
  .setDescription('[🔍] Envia o status do bot'),
  async execute(int, client, color, config) {

    /*
    const embed = new Discord.MessageEmbed()
    .setTitle(`⚒️ | Manutenção em Andamento!`)
    .setDescription(`> **Porcentagem Completa:** __80%__ \`▉▉▉▉▉▉▉▉▤▤\``)
    .addField(`> <a:BP_alerta_gif:753036518964330531> | Status da Host:`, '[Clique Aqui!](https://stats.uptimerobot.com/1BnoXi6Mgp/790084368)', true)
    .addField(`
    <:BP_github:766277909803171872> | Github`, `[Clique Aqui!](https://github.com/DiogoNSPI06/Hyped-V4.0)`, true)
    .setColor(color)
    .setFooter(config.footer.owner);
    */
    const embed = new Discord.MessageEmbed()
    .setTitle(`⚒️ | Nenhuma Manutenção em Andamento`)
    .setDescription(`> Não há nenhuma Manutenção em Andamento, fique atento ao nosso [server](${config.URL.discord}) para saber o status do bot!`)
    .addField(`> <a:BP_alerta_gif:753036518964330531> | Status da Host:`, '[Clique Aqui!](https://stats.uptimerobot.com/1BnoXi6Mgp/790084368)', true)
    .addField(`
    <:BP_github:766277909803171872> | Github`, `[Clique Aqui!](https://github.com/DiogoNSPI06/Hyped-V4.0)`, true)
    .setColor(color)
    .setFooter(config.footer.owner);

    int.reply({ embeds: [embed] })
  },
};