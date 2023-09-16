import dayjs from "dayjs"
// import tz from 'dayjs/plugin/timezone'
// import utc from 'dayjs/plugin/utc'
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
const defaultTimezone = "America/Vancouver"

export function timezoneFormatter(t) {
    const time =t.valueOf()
   
return dayjs(time).tz(defaultTimezone).format("YYYY-MM-DD HH:mm:ss")
}