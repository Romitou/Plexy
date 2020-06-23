const Discord = require('discord.js');
const setupFunctions = require('./setup');
require('dotenv').config();

const client = new Discord.Client();

setupFunctions.loadConfig(client);
setupFunctions.loadEvents(client);
setupFunctions.loadCommands(client);

client.login(process.env.DISCORD_API);

module.exports = client;
