export function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

export function setHours(dt, h) {
  var s = /(\d+):(\d+)(.+)/.exec(h);
  dt.setHours(s[3] === "PM" ?
    12 + parseInt(s[1], 10) :
    parseInt(s[1], 10));
  dt.setMinutes(parseInt(s[2], 10));
}

function createAmPmTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return { hours, minutes, ampm };
}

export function formatAMPM(date) {
  const { hours, minutes, ampm } = createAmPmTime(date)
  return hours + ':' + minutes + ' ' + ampm
}


export function getAmPmHours(date) {
  const { hours } = createAmPmTime(date)
  return hours;
}

export function getAmPmMin(date) {
  const { minutes } = createAmPmTime(date)
  return minutes;
}

export function getAmPm(date) {
  const { ampm } = createAmPmTime(date)
  return ampm;
}

export function toTwoDigit(number) {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
}
