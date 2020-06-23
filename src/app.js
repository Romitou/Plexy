const Discord = require('discord.js');
const loadEvents = require('./setup');
require('dotenv').config();

const client = new Discord.Client();

loadEvents(client);

client.login(process.env.DISCORD_API);
