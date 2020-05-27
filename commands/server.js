export const name = 'server'
export const description = 'Display info about this server.'
export function execute(message) {
  message.channel.send(
    `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
  )
}
