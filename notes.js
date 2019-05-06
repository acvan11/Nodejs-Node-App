const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => {
	return "Okay!";
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
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
	const notes = loadNotes()
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
	const notes = loadNotes();
	notes.forEach(note => console.log(note))
}

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote1: removeNote,
	listing: listing
};
