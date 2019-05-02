const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: function () {
		console.log('Adding a new note! ^^')
	}
})

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing the note! ^^')
	}
})

// List all the notes
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: function () {
		console.log('Listing all the notes! ^^')
	}
})

// Read the note
yargs.command({
	command: 'read',
	handler: function() {
		console.log('Read all the note! ^^')
	}
})

console.log(yargs.argv)