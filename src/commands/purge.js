module.exports = {
  name: 'purge',
  description: 'Supprimer plusieurs messages dans un salon.',
  aliases: ['bulkdelete'],
  async execute(message, args) {
    if (!args[0]) return message.channel.send(':x: Merci d\'indiquer un nombre de message à supprimer.');
    if (args[0] >= 100) return message.channel.send(':x: Vous ne pouvez supprimer qu\'au maximum 100 messages.');
    await message.delete();
    return message.channel.bulkDelete(await message.channel.messages.fetch({ limit: args[0] })
      .catch(console.error)).catch(console.error);
  },
};
