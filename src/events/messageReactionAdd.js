const client = require('../app');
const ticketManager = require('../handlers/ticketManager');

async function messageReactionAddHandler(reaction, member) {
  if (member.bot) return;
  if (reaction.message.channel.id === client.config.support.channel) {
    reaction.remove();
    reaction.message.react('✅');
    ticketManager.create(member, client);
  }
}

module.exports = messageReactionAddHandler;
