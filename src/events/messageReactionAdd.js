const client = require('../app');
const ticketManager = require('../handlers/ticketManager');
const roleManager = require('../handlers/roleManager');

async function messageReactionAddHandler(reaction, user) {
  if (user.bot) return;
  if (reaction.message.channel.id === client.config.support.channel) {
    await ticketManager.create(user, reaction, client);
  } else if (reaction.message.channel.id === client.config.autorole.channel) {
    await roleManager.manage(user, reaction, client);
  }
}

module.exports = messageReactionAddHandler;
