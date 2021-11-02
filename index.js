const express = require('express');
const {readFile} = require('fs').promises

const port = 3000;
const app = express();

app.get('/', async(request, response) => {
        response.send(await readFile('./home.html', 'utf8') )
    });



app.use((request, response, next) => {
    response.status(404).send(
        "<h1>Page not found on the server</h1>")
})


app.get('/user', async (request, response) => {
    response.send('page not found')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})