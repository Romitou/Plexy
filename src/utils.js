/* eslint-disable no-restricted-syntax */

async function removeReaction(message, member) {
  const userReactions = message.reactions.cache
    .filter((reaction) => reaction.users.cache.has(member.id));
  for (const react of userReactions.values()) {
    react.users.remove(member.id);
  }
}

module.exports = { removeReaction };
