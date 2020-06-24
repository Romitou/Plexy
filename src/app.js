/* Importing dependencies */
const moment = require('moment');
const { Client } = require('discord.js');
const setup = require('./setup');
require('dotenv').config();

/* Create and export client */
const client = new Client();
module.exports = client;

/* Load and setup client */
setup.loadConfig(client);
setup.loadEvents(client);
setup.loadCommands(client);
moment.locale('fr');

/* Login client (with token provided in .env) */
client.login(process.env.DISCORD_API);
