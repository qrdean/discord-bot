export const name = 'avatar'
export const description =
  'Get the avatar URL of the tagged user(s), or your own avatar.'
export const aliases = ['icon', 'pfp']
export function execute(message) {
  if (!message.mentions.users.size) {
    return message.channel.send(
      `Your avatar: ${message.author.displayAvatarURL}`
    )
  }
  const avatarList = message.mentions.users.map((user) => {
    return `${user.username}'s avatar: ${user.displayAvatarURL}`
  })
  // send the entire array of strings as a message
  // by default, discord.js will `.join()` the array with `\n`
  message.channel.send(avatarList)
}
