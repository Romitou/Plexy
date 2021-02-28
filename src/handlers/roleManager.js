/* eslint-disable no-restricted-syntax */

const { removeReaction } = require('../utils');

async function load(client) {
  if (!client?.config?.autorole?.enabled) return;
  const roleChannel = await client.channels.cache.get(client.config.autorole.channel);
  roleChannel.messages.fetch({ limit: 100 }, true);
}

async function roleManage(member, id, client) {
  const role = client.guild.roles.resolve(id);
  if (!member.roles.cache.has(role.id)) await member.roles.add(role);
  if (member.roles.cache.has(role.id)) await member.roles.remove(role);
}

async function manage(user, reaction, client) {
  await removeReaction(reaction.message, user);
  const member = client.guild.members.resolve(user.id);
  const roleConfig = client.config.autorole.data;
  if (roleConfig.one.reaction
    === reaction.emoji.name) await roleManage(member, roleConfig.one.role, client);
  if (roleConfig.two.reaction
    === reaction.emoji.name) await roleManage(member, roleConfig.two.role, client);
}

module.exports = { load, manage };
