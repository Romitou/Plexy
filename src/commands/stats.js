const Discord = require('discord.js');
const moment = require('moment');
const pkg = require('../../package.json');

module.exports = {
  name: 'stats',
  description: 'Envoie les informations concernant le bot.',
  aliases: ['stat', 'info'],
  async execute(message, _args, client) {
    const errorEmbed = new Discord.MessageEmbed()
      .setColor(client.config.color.info)
      .addField(':bookmark: Version', pkg.version)
      .addField(':stopwatch: Uptime', moment.duration(client.uptime, 'milliseconds').humanize())
      .addField(':busts_in_silhouette: Développeur(s)', `${pkg.authors.join('\n')}`)
      .setFooter(`Exécuté par ${message.member.displayName}`)
      .setTimestamp();
    await message.channel.send(errorEmbed);
  },
};
