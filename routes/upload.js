//requirements
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "files");
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date().toLocaleString() + ' ' + file.originalname)
    },
})

const upload = multer({storage: storage})

router.get('/', (req, res) => {
    res.render('upload')
})

router.post('/', upload.single("file"), (req, res) => {
    res.send('Image Uploaded')
})

//export to router
module.exports = router