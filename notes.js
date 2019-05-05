const fs = require("fs");

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
	const notes = loadNotes();
	var count = 0
	console.log(notes)
	notes.forEach((note, index) => {
		if (note.title === title){
			notes.splice(index,1)
			count++
		}
	})
	if (count === 0){
		console.log('There is no such note')
	}else{
		saveNotes(notes)
		console.log('The note is removed!')
		console.log(notes)
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
	removeNote: removeNote,
	listing: listing
};
