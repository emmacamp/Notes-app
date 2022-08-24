/* Destructuring the Router object from the express module. */
const { Router } = require('express')
/* Creating a new instance of the Router object. */
const router = Router()

const { getNotes, getNote, createNote, updateNote, deleteNote } =  require('../controllers/notes.controller')

/* 
*   POST = Create
*   GET = Read
*   PUT = Update
*   DELETE = Delete
*/

router.route('/')
    .get(getNotes)
    .post(createNote)
    

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)


module.exports = router;