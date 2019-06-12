export const name = 'permission-check'
export const description = 'Display permissions on a role in the server.'
export function execute(message, args) {
  const roleString = args[0]
  let foundRole = null
  message.guild.roles.forEach(role => {
    if (role.name.toLowerCase() === roleString.toLowerCase()) {
      foundRole = role
    }
  })
  if (foundRole) {
    console.log(foundRole.serialize())
  }
  // console.log(message.guild.roles.first().serialize())
  message.channel.send(`testing`)
}
