const notesCtrl = {};

const NoteModel = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json(notes);

}

notesCtrl.createNote = async (req, res) => {
    const { title, description, date, author } = req.body;
    /* Creating a new note with the data that is being sent from the frontend. */
    const newNote = new NoteModel({
        title,
        description,
        author,
        date
    });
    await newNote.save();
    res.json({ message: 'Note Saved' })
};


notesCtrl.getNote = async (req, res) => {
    /* Finding the note by the id. */
    const note = await NoteModel.findById(req.params.id);
    console.log(note);
    res.json(note);
};


notesCtrl.updateNote = async (req, res) => {
    /* Finding the note by the id and updating it. */
    const { title, description, author } = req.body;
    await NoteModel.findByIdAndUpdate (req.params.id, {
        title,
        description,
        author
    });
    res.json({ message: 'Note Updated' })
}

notesCtrl.deleteNote = async (req, res) => {
    /* Finding the note by the id and deleting it. */
    await NoteModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note Deleted' })
}




module.exports = notesCtrl;