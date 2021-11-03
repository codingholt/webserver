const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user list')
})


router.get('/new', (req, res) => {
    res.send('user new form')
})
router.post('/', (req, res) => {
    res.send('create user')
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{name: 'cooldude'}, {name: 'coolegast'}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(req.user)
    next()
})
module.exports = router