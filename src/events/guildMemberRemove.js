const { MessageEmbed } = require('discord.js');
const client = require('../app');

async function guildMemberRemove(member) {
  const embed = new MessageEmbed()
    .setColor(client.config.color.alert)
    .setAuthor(member.displayName, member.user.displayAvatarURL())
    .setDescription('Un membre a quitté ce serveur.')
    .setFooter(`ID du membre: ${member.id}`);
  await client.guild.channels.resolve(client.config.moderation.channel).send(embed);
}

module.exports = guildMemberRemove;
