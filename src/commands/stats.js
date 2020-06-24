const Discord = require('discord.js');
const moment = require('moment');
const pkg = require('../../package.json');

module.exports = {
  name: 'stats',
  description: 'Envoie les informations concernant Plexy',
  aliases: ['stat', 'info'],
  async execute(message, _args, client) {
    const errorEmbed = new Discord.MessageEmbed()
      .setColor(client.config.color.info)
      .addField(':bookmark: Version', pkg.version)
      .addField(':stopwatch: Uptime', moment.duration(client.uptime, 'milliseconds').humanize())
      .addField(':busts_in_silhouette: Développeur', `${pkg.authors.join('\n')}`)
      .setTimestamp()
      .setFooter(`Exécuté par ${message.member.displayName}`);
    message.channel.send(errorEmbed);
  },
};
