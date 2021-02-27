const { MessageEmbed } = require('discord.js');
const client = require('../app');

async function guildMemberAdd(member) {
  if (client?.config?.autorole?.join?.role)
    await member.roles.add(
      await client.guild.roles.resolve(client.config.autorole.join.role),
      client.config.autorole.join.reason,
    );

  const embed = new MessageEmbed()
    .setColor(client.config.color.okay)
    .setAuthor(member.displayName, member.user.displayAvatarURL())
    .setDescription('Un nouveau membre a rejoint ce serveur.')
    .setFooter(`ID du membre: ${member.id}`);
  await client.guild.channels.resolve(client.config.moderation.channel).send(embed);
}

module.exports = guildMemberAdd;
