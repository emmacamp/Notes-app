const { Router } = require('express')
const router = Router()
const { getUsers, getUser, createUser, deleteUser } = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    // .get(getUser)
    .delete(deleteUser)


module.exports = router;