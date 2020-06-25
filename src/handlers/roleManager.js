/* eslint-disable no-restricted-syntax */

async function load(client) {
  const roleChannel = await client.channels.cache.get(client.config.autorole.channel);
  roleChannel.messages.fetch({ limit: 100 }, true);
}

async function roleManage(member, id, client) {
  const role = client.guild.roles.resolve(id);
  if (!member.roles.cache.has(role.id)) member.roles.add(role);
  if (member.roles.cache.has(role.id)) member.roles.remove(role);
}

async function manage(user, reaction, client) {
  const member = client.guild.members.cache.get(user.id);
  if (client.config.autorole.data.french.reaction
    === reaction.emoji.name) roleManage(member, client.config.autorole.data.french.role, client);
  if (client.config.autorole.data.english.reaction
    === reaction.emoji.name) roleManage(member, client.config.autorole.data.english.role, client);
}

module.exports = { load, manage };
