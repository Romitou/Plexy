/* Importing dependencies */
const Discord = require('discord.js');
const moment = require('moment');
const setup = require('./setup');
require('dotenv').config();

/* Create and export client */
const client = new Discord.Client();
module.exports = client;

/* Load and setup client */
setup.loadConfig(client);
setup.loadEvents(client);
setup.loadCommands(client);
moment.locale('fr');

/* Login client (with token provided in .env) */
client.login(process.env.DISCORD_API);
