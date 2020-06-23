const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'say',
  description: 'Envoyer un message avec Plexy',
  execute(message, args, client) {
    message.delete();
    const embed = new MessageEmbed()
      .setColor(client.config.color.info)
      .setDescription(args.join(' '));
    message.channel.send(embed);
  },
}
