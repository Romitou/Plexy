const client = require('../app');
const ticketManager = require('../handlers/ticketManager');
const roleManager = require('../handlers/roleManager');

async function messageReactionAddHandler(reaction, member) {
  if (member.bot) return;
  if (reaction.message.channel.id === client.config.support.channel) {
    reaction.remove();
    reaction.message.react('✅');
    ticketManager.create(member, client);
  } else if (reaction.message.channel.id === client.config.autorole.channel) {
    roleManager.manage(member, reaction, client);
  }
}

module.exports = messageReactionAddHandler;
