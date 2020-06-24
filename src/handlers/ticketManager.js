const { MessageEmbed } = require('discord.js');

async function load(client) {
  const ticketChannel = await client.channels.cache.get(client.config.support.channel);
  ticketChannel.messages.fetch({ limit: 100 }, true);
}

async function create(member, client) {
  const channel = await client.guild.channels.create(`📁-${member.username}`);
  await channel.setParent(client.config.support.category);
  const supportRole = await client.guild.roles.cache
    .find((r) => r.id === client.config.support.roles.support);
  await channel.overwritePermissions([{
    id: client.config.support.roles.bot,
    allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS'],
  }, {
    id: client.config.support.roles.support,
    allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS'],
  }, {
    id: member.id,
    allow: ['VIEW_CHANNEL'],
  }, {
    id: client.config.support.roles.everyone,
    deny: ['VIEW_CHANNEL'],
  }]);
  channel.setTopic(`${member.id}`);
  const helloEmbed = new MessageEmbed()
    .setTitle(`📁 Demande de ${member.username} - Request of ${member.username}`)
    .setColor(client.config.color.info)
    .setDescription(`Bienvenue ${member.username}, merci d'avoir ouvert une demande. N'hésite pas à nous donner le plus de détails possible pour t'aider au mieux. S'il s'agit d'un problème en jeu, tu peux aussi nous faire parvenir une capture d'écran du \`/debug\`. Merci ! :smile:\n\nWelcome ${member.username}, thank you for opening a request. Do not hesitate to give us as many details as possible to help you as much as possible. If it's an in-game problem, you can also send us a screenshot of the \`/debug\`. Thank you! :smile:`);
  channel.send(helloEmbed);
  channel.send(`:arrow_right_hook: Mentions automatiques : ${supportRole} ${member}`).then((msg) => msg.delete({ timeout: 10000 }));
}

module.exports = { load, create };
