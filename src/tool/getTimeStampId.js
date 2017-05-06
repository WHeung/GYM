export default function getTimeStampId () {
  const date = new Date()
  return date.getTime() + '' + date.getMilliseconds()
}
