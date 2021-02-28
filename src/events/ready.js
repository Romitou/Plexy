const client = require('../app');
const setup = require('../setup');
const presenceManager = require('../handlers/presenceManager');

async function readyHandler() {
  client.guild = client.guilds.resolve(client.config.guild);
  await setup.loadHandlers(client);
  await presenceManager.setPresence(client);

  console.log(`[${client.name}] Successfully ready to go.`);

  setInterval(() => {
    presenceManager.setPresence(client);
  }, 60000);
}

module.exports = readyHandler;
