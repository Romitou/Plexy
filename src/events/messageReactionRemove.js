const client = require('../app');
const roleManager = require('../handlers/roleManager');

async function messageReactionRemoveHandler(reaction, member) {
  if (member.bot) return;
  if (reaction.message.channel.id === client.config.autorole.channel) {
    roleManager.manage(member, reaction, client);
  }
}

module.exports = messageReactionRemoveHandler;
