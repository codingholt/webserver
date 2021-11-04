//requirements
const express = require('express');
const router = express.Router();

//on /doggo
router.get('/', (req, res) => {
    //renders doggo.ejs
    res.render('doggo')
})

//export to router
module.exports = router