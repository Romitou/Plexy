const client = require('../app');
const setup = require('../setup');
const presenceManager = require('../handlers/presenceManager');

async function readyHandler() {
  client.guild = client.guilds.resolve(client.config.guild);
  await setup.loadHandlers(client);
  await presenceManager.setPresence(client);

  console.log(`[${client.name}] Successfully ready to go.`);
  await client.guild.channels.resolve(client.config.moderation.channel).send(`<a:yep:712759133132029983> ${client.name} redémarré.`);

  setInterval(() => {
    presenceManager.setPresence(client);
  }, 60000);
}

module.exports = readyHandler;
