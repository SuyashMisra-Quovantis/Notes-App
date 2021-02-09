const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  /*
  const duplicate = notes.filter((obj) => {
    return obj.title === title;
  });
  */

  const duplicate = notes.find((a) => {
    return a.title === title;
  });

  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Title already taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const modifiedData = notes.filter((obj) => {
    return obj.title !== title;
  });

  if (modifiedData.length !== notes.length) {
    saveNote(modifiedData);
    console.log(chalk.bgGreen("Note removed!"));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }

  // fs.writeFileSync("./notes.json", JSON.stringify(duplicate));

  // console.log(`Removed note having title: ${noteTitle}`);
};

const saveNote = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", data);
};

const loadNotes = () => {
  //returns an array of notes
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const stringData = dataBuffer.toString();
    const jsonData = JSON.parse(stringData);
    return jsonData;
  } catch (e) {
    return [];
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your notes: "));
  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((not) => {
    return not.title === title;
  });

  if (note) {
    console.log(chalk.yellow(title));
    console.log(note.body);
  } else {
    console.log(chalk.red("Note not found!"));
  }
};

module.exports = {
  listNotes: listNotes,
  removeNote: removeNote,
  addNote: addNote,
  readNote: readNote,
};
