/*
Part of that file belongs to Swan.
Source code available at https://github.com/Skript-MC/Swan.
*/

const client = require('../app');

async function messageHandler(message) {
  if (message.author.bot) return;
  if (message.toString().startsWith('.')) {
    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
    || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    try {
      command.execute(message, args, client);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = messageHandler;
