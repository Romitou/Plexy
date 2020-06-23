/* eslint-disable no-param-reassign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */

/*
Part of that file belongs to Swan.
Source code available at https://github.com/Skript-MC/Swan.
*/

const path = require('path');
const fs = require('fs').promises;
const Discord = require('discord.js');

async function loadEvents(client) {
  console.log('[Plexy] Loading events ...');
  const filePath = path.join(__dirname, 'events');
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const eventFunction = require(path.join(filePath, file));
    const event = file.split('.')[0];
    client.on(event, eventFunction);
    console.log(`> ${file} loaded.`);
  }
}

async function loadCommands(client) {
  client.commands = new Discord.Collection();
  const filePath = path.join(__dirname, 'commands');
  const files = await fs.readdir(filePath);
  console.log('[Plexy] Loading commands ...');
  for (const file of files) {
    const command = require(path.join(filePath, file));
    client.commands.set(command.name, command);
    console.log(`> ${file} loaded.`);
  }
}

async function loadConfig(client) {
  const config = require('../config.json'); // eslint-disable-line global-require
  client.config = config;
  console.log('[Plexy] Configuration loaded.');
}

module.exports = { loadCommands, loadEvents, loadConfig };
