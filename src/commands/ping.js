const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Envoie le ping de Plexy',
  aliases: ['ms', 'lag'],
  async execute(message, _args, client) {
    const msg = await message.channel.send('📨 Calcul en cours ...');
    msg.delete();
    const errorEmbed = new Discord.MessageEmbed()
      .setColor(client.config.color.info)
      .setDescription(`:hourglass: Plexy: \`${msg.createdTimestamp - message.createdTimestamp}ms\`\n\n:globe_with_meridians: API Discord: \`${Math.round(client.ws.ping)}ms\``)
      .setTimestamp()
      .setFooter(`Exécuté par ${message.member.displayName}`);
    message.channel.send(errorEmbed);
  },
};
