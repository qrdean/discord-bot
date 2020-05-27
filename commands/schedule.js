import { MessageEmbed, RichEmbed, Channel, Message } from 'discord.js'
import { handleInCase } from '../utils/timeUtils'
const CHECKBOX = '✅'
// set this at a top level of the bot
const SET_TIME = '30000'
const PREPOSITION_LIST = ['in', 'at', 'to', 'on']
export const name = 'schedule'
export const description = 'Schedule a time to play with your buds'
export const args = true
export async function execute(message, params) {
  if (args.length === 0) {
    // No arguments passed
    return message.channel.send(
      'No arguments passed. Description: ' + description
    )
  }

  scheduleParamsParser(params)

  // send this to a function to parse
  // const [gameName, mod, time] = params
  // const embed = new RichEmbed()
  //   .setTitle(`Schedule ${gameName}`)
  //   .setAuthor(message.author.tag, message.author.displayAvatarURL)
  //   .setColor(0xff0000)
  //   .setDescription(`Scheduling ${gameName} at ${time}`)

  // const msg = await message.channel.send(embed)
  // await msg.react(CHECKBOX)
  // let keepCalling = true
  // setTimeout(() => {
  //   keepCalling = false
  // }, SET_TIME)
  // while (keepCalling) {
  //   try {
  //     const reactionFilter = (reaction, user) =>
  //       [CHECKBOX].includes(reaction.emoji.name) && !user.bot
  //     const reactions = await msg.awaitReactions(reactionFilter, {
  //       time: 1000,
  //     })
  //     const choice = reactions.get(CHECKBOX)
  //     if (choice && choice.emoji.name === CHECKBOX) {
  //       addUserToMessage(embed, msg, choice.users)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}

function addUserToMessage(embedMessage, message, users) {
  if (embedMessage.fields) {
    embedMessage.fields = []
  }
  const userNameList = users
    .filter((user) => !user.bot)
    .map((userObj) => userObj.username)
  console.log(userNameList)
  embedMessage.addField('Attendees', userNameList, false)

  message.edit(embedMessage)
}

/**
 * Takes the parameters from the message creator and tries to figure it out
 */
function scheduleParamsParser(params) {
  // a list of prepositions to find
  // Should seperate out into two sections
  // Event Name || Time
  let firstHalf = []
  let secondHalf = []
  let firstPrep
  let secondPrep
  for (const prep of PREPOSITION_LIST) {
    const index = params.indexOf(prep)
    console.log(prep)
    console.log(index)
    if (index > -1) {
      firstHalf = params.slice(0, index)
      firstPrep = params[index]
      secondHalf = params.slice(index + 1, params.length)
      break
    }
  }
  // Join this with space
  console.log(firstHalf)
  console.log(secondHalf)
  switch (firstPrep) {
    case 'in':
      handleInCase()
      // Specify time from Current Date/Time. Minutes. Hours. Days. Weeks. Months
      break
    case 'at':
      // Specify a specific time e.g. 6 PM. could be followed by an 'on' some Day or Date
      break
    case 'on':
      // Specifies a day or date e.g. Monday or 5/26. Usually followed by an 'at' to specify time
      break
    case 'to':
      // Specify movement of time
      break
    default:
      // DO NOTHING
      break
  }

  if (params.includes(PREPOSITION_LIST)) {
    console.log(params)
  }
}
