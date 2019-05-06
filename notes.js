const fs = require("fs")
const chalk = require("chalk")

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};
const notes = loadNotes()

const addNote = (title, body) => {
	const duplicateNote = notes.find(note => note.title === title);
	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log("New node added!");
	} else {
		console.log("Note title taken!");
	}
};

const removeNote = (title) => {
	const notesToKeep = notes.filter(
		note => note.title!== title
	)
	saveNotes(notesToKeep)
		if (notes.length === notesToKeep.length){
		console.log(chalk.red.inverse('There is no such a note'))
	} else {
		console.log(chalk.green.inverse('The note is removed!'))
	}
}

const listing = () => {
	console.log(chalk.yellow.inverse('Here is your notes'))
	notes.forEach(note => console.log(note))
}

const readNote = (title) => {
	const findNote = notes.find(note => note.title === title)
	if (findNote) {
		console.log(chalk.green.inverse(findNote.title) + " " + findNote.body)
	} else {
		console.log(chalk.red.inverse('There is no such a note'))
	}
}

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};



module.exports = {
	addNote: addNote,
	removeNote1: removeNote,
	listing: listing,
	readNote: readNote
};
