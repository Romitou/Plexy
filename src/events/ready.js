const client = require('../app');
const setup = require('../setup');

async function readyHandler() {
  client.guild = client.guilds.resolve(client.config.guild);
  // client.user.setActivity('test');
  console.log('[Plexy] Successfully ready to go.');
  setup.loadHandlers(client);
}

module.exports = readyHandler;
