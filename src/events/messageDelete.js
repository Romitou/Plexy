const { MessageEmbed } = require('discord.js');
const client = require('../app');

async function messageDelete(message) {
  if (message.author.bot) return;
  const embed = new MessageEmbed()
    .setColor(client.config.color.alert)
    .setAuthor(message.member.displayName, message.author.displayAvatarURL())
    .setDescription(`Un message a été supprimé dans ${message.channel}.`)
    .addField('Contenu du message', message.content || 'Aucune donnée')
    .setFooter(`ID du membre: ${message.author.id}`)
    .setTimestamp(message.createdAt);
  await client.guild.channels.resolve(client.config.moderation.channel).send(embed);
}

module.exports = messageDelete;
