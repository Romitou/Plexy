const client = require('./../app');

async function readyHandler() {
  client.user.setActivity('test');
  console.log('[Plexy] Successfully ready to go.');
}

module.exports = readyHandler;
