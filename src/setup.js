/*
Part of that file belongs to Swan.
Source code available at https://github.com/Skript-MC/Swan.
*/

const path = require('path');
const fs = require('fs').promises;

async function loadEvents(client) {
  const filePath = path.join(__dirname, 'events');
  const files = await fs.readdir(filePath);
  for (const file of files) {
    if (file.endsWith('.js')) {
      const eventFunction = require(path.join(filePath, file));
      const event = file.split('.')[0];
      client.on(event, eventFunction);
    }
  }
}

module.exports = loadEvents;
