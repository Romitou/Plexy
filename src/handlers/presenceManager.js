const Axios = require('axios');

// eslint-disable-next-line no-empty-function
async function load() {}

// This function is just fun.
// I didn't know what to do.
async function getGitHubInfo(type) {
  const githubApi = await Axios.get('https://api.github.com/repos/Romitou/Wolfo/releases')
    .catch(console.error);
  const lastRelease = githubApi.data[0];
  if (type === 'downloads') return lastRelease.assets[0].download_count;
  if (type === 'name') return `${lastRelease.tag_name} - ${lastRelease.name}`;
  return undefined;
}

async function randomPresence(client) {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) return { activity: { name: `${client.guild.memberCount} members on Discord` }, status: 'online' };
  if (random === 2) return { activity: { name: `${await getGitHubInfo('downloads')} downloads on GitHub` }, status: 'online' };
  if (random === 3) return { activity: { name: `${await getGitHubInfo('name')} release on GitHub` }, status: 'online' };
  return undefined;
}

async function setPresence(client) {
  await client.user.setPresence(await randomPresence(client));
}

module.exports = { setPresence, load };
