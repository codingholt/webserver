//requirements
const express = require('express');
const router = express.Router();

//basic home page doesnt make any sense
router.get('/', (req, res) => {
    res.send('user list')
})

// '/new' page to make new user
router.get('/new', (req, res) => {
    res.render('users/new', {firstName :'test'})
})

router.post('/new', (req, res) => {
    const isValid = false
    if (isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length -1}`)
    }else{
        console.log('invalid user')
        res.render('users/new', {firstName: req.body.firstName})
    }
    console.log(req.body.firstName)
    res.send('hi')
})


router
    .route("/:id")
    //get route for id
    .get((req, res) => {
        res.send(`Get user with ID ${req.params.id}`)
    })
    //put route for id
    .put((req, res) => {
        res.send(`update user with ID ${req.params.id}`)
    })
    //delete route for id
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{name: 'cooldude'}, {name: 'coolegast'}]

router.param("id", (req, res, next, id) => {
    //check id with position in array
    req.user = users[id]
    //Log user if is present in the array
    console.log(req.user)

    next()
})

//export to router
module.exports = router