const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Envoie la latence du bot.',
  aliases: ['ms', 'lag'],
  async execute(message, _args, client) {
    const msg = await message.channel.send('📨 Calcul en cours ...');
    await msg.delete();
    const errorEmbed = new Discord.MessageEmbed()
      .setColor(client.config.color.info)
      .setDescription(`:hourglass: ${client.name}: \`${msg.createdTimestamp - message.createdTimestamp}ms\`\n\n:globe_with_meridians: API Discord: \`${Math.round(client.ws.ping)}ms\``)
      .setTimestamp()
      .setFooter(`Exécuté par ${message.member.displayName}`);
    await message.channel.send(errorEmbed);
  },
};
