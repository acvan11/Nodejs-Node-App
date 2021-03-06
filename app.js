const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		},
		body: {
			describe: "full name of body",
			demandOption: true,
			type: "string"
		}
	},
	handler: argv => notes.addNote(argv.title, argv.body)
});

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: argv => notes.removeNote1(argv.title)
});

// List all the notes
yargs.command({
	command: "list",
	describe: "List all notes",
	handler: () => notes.listing()
});

// Read the note
yargs.command({
	command: "read",
	describe: "searching note",
	handler: argv => notes.readNote(argv.title)
});

yargs.parse();
//console.log(yargs.argv)
