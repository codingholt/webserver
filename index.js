const express = require('express');
const {readFile} = require('fs').promises

const port = 3000
const app = express();

app.get('/', async(request, response) => {
        response.send(await readFile('./home.html', 'utf8') )
    });

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})