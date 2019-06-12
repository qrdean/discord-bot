export const name = 'server-roles'
export const description = 'Display roles in this server.'
export function execute(message) {
  let roles = message.guild.roles.map(role => role).join(', ')
  message.channel.send(
    `Server name: ${message.guild.name}\nHas Roles: ${roles}`
  )
}
