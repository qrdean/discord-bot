import moment from 'moment'

/**
 * @param {*} object
 */
export function handleInCase(object) {
  switch (type) {
    case 'minutes':
      console.log(moment().add(time, 'minutes'))
      break
    case 'hours':
      moment().add(time, 'hours')
      break
    case 'days':
      moment().add(time, 'days')
      break
    case 'weeks':
      moment().add(time, 'weeks')
      break
    case 'months':
      moment().add(time, 'months')
      break
  }
  moment.now()
}

export function handleAtCase(time, date) {
    return
}

export function handleOnCase(date, time) {

}

/**
 * Takes a string and returns it in a format momentjs expects
 * @param {string} timeString
 */
export function timeShortHandFormatter(timeString) {
  if (
    timeString &&
    (timeString.toLowerCase() === 'hr' ||
      timeString.toLowerCase() === 'hours' ||
      timeString.toLowerCase() === 'hour')
  ) {
    return 'hours'
  }
  if (
    timeString &&
    (timeString.toLowerCase() === 'min' ||
      timeString.toLowerCase() === 'minute' ||
      timeString.toLowerCase() === 'minutes')
  ) {
    return 'minutes'
  }
  if (
    timeString &&
    (timeString.toLowerCase() === 'day' || timeString.toLowerCase() === 'days')
  ) {
    return 'days'
  }
  if (
    timeString &&
    (timeString.toLowerCase() === 'mon' ||
      timeString.toLowerCase() === 'month' ||
      timeString.toLowerCase() === 'months')
  ) {
    return 'months'
  }
}
