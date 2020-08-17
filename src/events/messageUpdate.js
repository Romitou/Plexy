const { MessageEmbed } = require('discord.js');
const client = require('../app');

async function messageUpdate(oldMessage, newMessage) {
  if (oldMessage.author.bot) return;
  const embed = new MessageEmbed()
    .setColor(client.config.color.warn)
    .setAuthor(oldMessage.member.displayName, oldMessage.author.displayAvatarURL())
    .setDescription(`Un message a été édité dans ${oldMessage.channel} ([lien](https://discord.com/channels/${client.config.guild}/${oldMessage.channel.id}/${oldMessage.id})).`)
    .addField('Ancien message', oldMessage.content || 'Aucune donnée')
    .addField('Nouveau message', newMessage.content || 'Aucune donnée')
    .setFooter(`ID du membre: ${oldMessage.author.id}`)
    .setTimestamp(oldMessage.createdAt);
  await client.guild.channels.resolve(client.config.moderation.channel).send(embed);
}

module.exports = messageUpdate;
