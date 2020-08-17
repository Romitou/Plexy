/*
Part of that file belongs to Swan.
Source code available at https://github.com/Skript-MC/Swan.
*/

const client = require('../app');

async function messageHandler(message) {
  if (message.author.bot) return;
  if (message.content.startsWith(client.config.prefix)) {
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
    || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    try {
      await command.execute(message, args, client);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = messageHandler;
