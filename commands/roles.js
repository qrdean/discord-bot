export const name = 'server-roles'
export const description = 'Display roles in this server.'
export function execute(message) {
  // console.log(message.guild.roles)
  const roles = message.guild.roles.map((role) => role).join(', ')
  console.log(roles)
  message.channel.send(
    `Server name: ${message.guild.name}\nHas Roles: ${roles}`
  )
}
