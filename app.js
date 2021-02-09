/*
const cmd = process.argv[2];
// console.log(cmd);

if (cmd === "add") {
  console.log("Added");
} else if (cmd === "remove") {
  console.log("Removed");
}
*/

const yargs = require("yargs");
const notes = require("./notes.js");

yargs
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "This is the first note",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.addNote(argv.title, argv.body);
      // console.log(
      //   `Title of the note is: ${argv.title} and description is: ${argv.body}`
      // );
    },
  })
  .command({
    command: "remove",
    describe: "Remove note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.removeNote(argv.title);
      // console.log("Removed successfully!");
    },
  })
  .command({
    command: "list",
    describe: "List all notes",
    handler: () => {
      notes.listNotes();
    },
  })
  .command({
    command: "read",
    describe: "Read note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.readNote(argv.title);
      // console.log("Reading the node!");
    },
  });

yargs.parse();
// console.log(yargs.argv);
