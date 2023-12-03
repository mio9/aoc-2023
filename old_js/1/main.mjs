import { readFileSync } from 'node:fs'

const file = readFileSync(`./input.txt`, 'utf-8')

const lines = file.split('\n')
const converted = lines.map(line => {
  let firstNum = ''
  let lastNum = ''
  for (let i = 0; i <= line.length - 1; i++) {
    const ch = line.at(i)
    if (ch >= '0' && ch <= '9') {
      firstNum = line.at(i)
      break;
    }
  }
  for (let i = line.length - 1; i >= 0; i--) {
    const ch = line.at(i)
    if (ch >= '0' && ch <= '9') {
      firstNum = line.at(i)
      break;
    }
  }
  return firstNum
})
console.log(converted)
// console.log(lines.length)