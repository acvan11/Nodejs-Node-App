const chalk = require('chalk')

console.log(chalk.blue('Success'))
console.log(chalk.green.inverse.bold('Andy'))
console.log(chalk.blue('Hello') + ' World' + chalk.red.bold.inverse('Ok'))