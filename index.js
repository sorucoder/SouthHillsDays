import {DateTime} from 'luxon';
import chalk from 'chalk';

const nowDate = DateTime.now()
const startDate = DateTime.fromISO('2022-08-31')
const endDate = DateTime.fromISO('2024-09-30')

const nowStartDifferenceInDays = Math.round(nowDate.diff(startDate, 'days').toObject().days)
const nowEndDifferenceInDays = Math.round(endDate.diff(nowDate, 'days').toObject().days)

console.log(chalk.green(chalk.bold(`Number of days since enrollment: ${nowStartDifferenceInDays}`)))
console.log(chalk.red(chalk.bold(`Number of days until graduation: ${nowEndDifferenceInDays}`)))